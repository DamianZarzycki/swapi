import { TestBed } from '@angular/core/testing';
import { BattleService } from './battle.service';
import { lukeSkywalker, hanSolo, xWing, HttpClientMock } from '../mocks/mocks';
import { HttpClient } from '@angular/common/http';
import { SwapiService } from './swapi.service';

describe('BattleService', () => {
  let battleService: BattleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BattleService,
        SwapiService,
        { provide: HttpClient, useClass: HttpClientMock },
      ],
    });
    battleService = TestBed.inject(BattleService);
  });

  it('should be created', () => {
    expect(battleService).toBeTruthy();
  });

  it('should correctly determine the winner based on starships count and BMI', () => {
    const result = battleService.fight(lukeSkywalker, hanSolo, false);
    const bmi = battleService.calculateBMI(
      +lukeSkywalker.mass,
      +lukeSkywalker.height,
    );
    expect(result.winner).toEqual(lukeSkywalker);
    expect(result.message).toEqual(
      `${lukeSkywalker.name} is the winner with a higher BMI of ${bmi.toFixed(
        2,
      )}.`,
    );
  });

  it('should throw an error when weight is less than or equal to 0', () => {
    const weight = 0;
    const height = 180;

    expect(() => battleService.calculateBMI(weight, height)).toThrowError(
      'Weight and height must be positive values.',
    );
  });

  it('should throw an error when height is less than or equal to 0', () => {
    const weight = 70;
    const height = -10;

    expect(() => battleService.calculateBMI(weight, height)).toThrowError(
      'Weight and height must be positive values.',
    );
  });

  it('should handle unknown properties in character and determine the winner', () => {
    const result = battleService.fight(lukeSkywalker, xWing, true);
    expect(result.winner).toEqual(lukeSkywalker);
    expect(result.message).toContain(
      `${lukeSkywalker.name} is the winner because of owning more starships than ${xWing.name} has passengers on it`,
    );
  });

  it('should determine the winner between different type of character based on having more passengers by person', () => {
    const changedLukeSkywalker = { ...lukeSkywalker, starships: [] };
    const changedXWing = { ...xWing, passengers: '4' };
    const result = battleService.fight(
      changedLukeSkywalker,
      changedXWing,
      true,
    );
    expect(result.winner).toEqual(changedXWing);
    expect(result.message).toContain(
      `${changedXWing.name} is the winner because of having more passengers than ${changedLukeSkywalker.name} owns starships`,
    );
  });

  it('should determine the winner based on mass', () => {
    const changedLukeSkywalker = { ...lukeSkywalker, mass: '101' };
    const changedHanSolo = { ...hanSolo, mass: '100', height: 'unknown' };
    const result = battleService.fight(
      changedLukeSkywalker,
      changedHanSolo,
      false,
    );
    const { character, winningProperty } =
      battleService.compareCharactersByProperties(
        changedLukeSkywalker,
        changedHanSolo,
      );
    expect(result.winner).toEqual(changedLukeSkywalker);
    expect(result.message).toContain(
      `${character?.name} is the winner because of: ${winningProperty}.`,
    );
  });

  it('should handle undefined characters and return no winner', () => {
    const result = battleService.fight(undefined, undefined, true);
    expect(result.winner).toBeUndefined();
    expect(result.message).toBe('');
  });
});
