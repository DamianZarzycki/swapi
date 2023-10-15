import { Injectable } from '@angular/core';
import { Person, Starship } from '../models/swapi-models';
@Injectable({
  providedIn: 'root',
})
export class BattleService {
  fight(
    firstCharacter?: Person | Starship,
    secondCharacter?: Person | Starship,
    differentTypeOfCharacter?: boolean,
  ): { winner: any; message: string } {
    if (!firstCharacter && !secondCharacter) {
      return { winner: undefined, message: '' };
    }
    let winner = undefined;
    let message = '';

    if (differentTypeOfCharacter && firstCharacter && secondCharacter) {
      const isFirstPlayerPerson = 'gender' in firstCharacter;
      const isSecondPlayerStarship = 'passengers' in secondCharacter;

      if (isFirstPlayerPerson && isSecondPlayerStarship) {
        if (
          firstCharacter.starships.length >
          +(secondCharacter as Starship)?.passengers
        ) {
          winner = firstCharacter;
          message = `${firstCharacter.name} is the winner because of owning more starships than ${secondCharacter.name} has passengers on it`;
        } else {
          winner = secondCharacter;
          message = `${secondCharacter.name} is the winner because of having more passengers than ${firstCharacter.name} owns starships`;
        }
      }
      return { winner, message };
    } else if (
      this.areCharacterPropertiesKnown(firstCharacter) &&
      this.areCharacterPropertiesKnown(secondCharacter)
    ) {
      const firstWarriorBmi = this.calculateBMI(
        +(firstCharacter as Person).mass,
        +(firstCharacter as Person).height,
      );
      const secondWarriorBmi = this.calculateBMI(
        +(secondCharacter as Person).mass,
        +(secondCharacter as Person).height,
      );

      if (firstWarriorBmi !== secondWarriorBmi) {
        winner =
          firstWarriorBmi > secondWarriorBmi ? firstCharacter : secondCharacter;
        message = `${winner?.name} is the winner with a higher BMI of ${Math.max(
          firstWarriorBmi,
          secondWarriorBmi,
        ).toFixed(2)}.`;
      } else {
        const { character, winningProperty } =
          this.compareCharactersByProperties(firstCharacter, secondCharacter);
        winner = character;
        message = `${winner?.name} is the winner because of: ${winningProperty}.`;
      }
    } else {
      const { character, winningProperty } = this.compareCharactersByProperties(
        firstCharacter,
        secondCharacter,
      );
      winner = character;
      message = `${winner?.name} is the winner because of: ${winningProperty}.`;
    }

    return { winner, message };
  }

  private areCharacterPropertiesKnown(character: any): boolean | null {
    if (character) {
      return (
        (character as Person).height !== 'unknown' &&
        (character as Person).mass !== 'unknown'
      );
    } else {
      return null;
    }
  }

  compareCharactersByProperties(
    firstCharacter: any,
    secondCharacter: any,
  ): { character: Person | undefined; winningProperty: string } {
    if (!firstCharacter && !secondCharacter) {
      return { character: undefined, winningProperty: '' };
    }
    const propertiesToCompare = [
      { property: 'mass', weight: 1 },
      { property: 'height', weight: 2 },
      { property: 'starships', weight: 3 },
    ];

    let winningProperty = '';

    for (const prop of propertiesToCompare) {
      const firstValue = +firstCharacter[prop.property];
      const secondValue = +secondCharacter[prop.property];

      if (firstValue !== secondValue) {
        if (firstValue > secondValue) {
          winningProperty = prop.property;
          return { character: firstCharacter, winningProperty };
        } else {
          winningProperty = prop.property;
          return { character: secondCharacter, winningProperty };
        }
      }
    }

    return { character: secondCharacter, winningProperty };
  }

  calculateBMI(weight: number, height: number): number {
    if (weight <= 0 || height <= 0) {
      throw new Error('Weight and height must be positive values.');
    }

    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  }
}
