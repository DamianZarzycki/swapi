import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, zip } from 'rxjs';
import { BattleService } from '../services/battle.service';
import { SwapiService } from '../services/swapi.service';
import { ShowWinnerDialogComponent } from './show-winner-dialog/show-winner-dialog.component';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss'],
})
export class GameAreaComponent implements OnInit, AfterViewInit {
  currentWinner?: { winner: any; message: string };
  playAsValue = 'person';
  playAgainstValue = 'person';
  firstCharacter?: any;
  secondCharacter?: any;
  isLoading = false;

  constructor(
    private battleService: BattleService,
    private swapiService: SwapiService,
    public dialog: MatDialog,
  ) {}

  ngAfterViewInit(): void {
    this.dialog.afterAllClosed.subscribe(() => {});
  }

  ngOnInit(): void {
    this.prepareFight();
  }

  playAsHandler(event?: any) {
    if (event.value) {
      this.playAsValue = event.value;
    }
    this.fetchCharacters(this.playAsValue, this.playAgainstValue);
  }

  playAgainstHandler(event?: any) {
    if (event.value) {
      this.playAgainstValue = event.value;
    }
    this.fetchCharacters(this.playAsValue, this.playAgainstValue);
  }

  private fetchCharacters(
    playAsValue: string,
    playAgainstValue: string,
    characterToRefetchId?: string,
  ) {
    this.isLoading = true;
    const differentTypeOfCharacter = playAsValue !== playAgainstValue;
    let firstCharacterObservable: Observable<any> | undefined;
    let secondCharacterObservable: Observable<any> | undefined;

    if (characterToRefetchId) {
      if (this.secondCharacter?.id === characterToRefetchId) {
        firstCharacterObservable = this.fetchCharacterObservable(playAsValue);
      } else if (this.firstCharacter?.id === characterToRefetchId) {
        secondCharacterObservable =
          this.fetchCharacterObservable(playAgainstValue);
      }
    } else {
      firstCharacterObservable = this.fetchCharacterObservable(playAsValue);
      secondCharacterObservable =
        this.fetchCharacterObservable(playAgainstValue);
    }

    if (firstCharacterObservable && secondCharacterObservable) {
      zip(firstCharacterObservable, secondCharacterObservable)
        .pipe(
          map(([firstCharacter, secondCharacter]) => {
            return [
              { ...firstCharacter, id: new Date().getTime() },
              { ...secondCharacter, id: new Date().getTime() + 1000 },
            ];
          }),
        )
        .subscribe(
          ([firstCharacter, secondCharacter]) => {
            this.firstCharacter = firstCharacter;
            this.secondCharacter = secondCharacter;
            this.isLoading = false;

            this.fight(differentTypeOfCharacter);
          },
          (error) => {
            this.isLoading = false;
          },
        );
    } else if (firstCharacterObservable && !secondCharacterObservable) {
      firstCharacterObservable?.subscribe((character: any) => {
        this.firstCharacter = { ...character, id: new Date().getTime() };
        this.isLoading = false;
        this.fight(differentTypeOfCharacter);
      });
    } else {
      secondCharacterObservable
        ?.pipe(
          map((character: any) => {
            return { ...character, id: new Date().getTime() };
          }),
        )
        .subscribe((character: any) => {
          this.secondCharacter = character;
          this.isLoading = false;
          this.fight(differentTypeOfCharacter);
        });
    }
  }

  private fetchCharacterObservable(selectedOption: string) {
    switch (selectedOption) {
      case 'person':
        return this.swapiService.getRandomPerson();
      case 'starship':
        return this.swapiService.getRandomStarship();
      default:
        return this.swapiService.getRandomPerson();
    }
  }

  fight(differentTypeOfCharacter?: boolean) {
    this.currentWinner = this.battleService.fight(
      this.firstCharacter,
      this.secondCharacter,
      differentTypeOfCharacter,
    );
    setTimeout(() => {
      this.openDialog('600ms', '0ms', this.currentWinner);
    }, 300);
  }

  prepareFight() {
    const winnerId = this.currentWinner?.winner?.id;
    this.fetchCharacters(this.playAsValue, this.playAgainstValue, winnerId);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    winner: any,
  ): void {
    this.dialog.open(ShowWinnerDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: winner,
      panelClass: 'full-panel',
    });
  }
}
