import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { GameModeSelectorComponent } from './game-mode-selector.component';
import { GameModelSelectorRoutingModule } from './game-mode-selector-routing.module';

@NgModule({
  declarations: [GameModeSelectorComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    GameModelSelectorRoutingModule,
  ],
})
export class GameModeSelectorModule {}
