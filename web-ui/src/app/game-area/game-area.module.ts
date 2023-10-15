import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GameCharactersModule } from '../game-characters/game-characters.module';
import { GameAreaRoutingModule } from './game-area-routing.module';
import { GameAreaComponent } from './game-area.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ShowWinnerDialogComponent } from './show-winner-dialog/show-winner-dialog.component';

@NgModule({
  declarations: [GameAreaComponent, ShowWinnerDialogComponent],
  imports: [
    CommonModule,
    GameAreaRoutingModule,
    GameCharactersModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
})
export class GameAreaModule {}
