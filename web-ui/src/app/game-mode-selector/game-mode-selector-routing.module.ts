// ,

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameModeSelectorComponent } from './game-mode-selector.component';

const routes: Routes = [
  {
    path: '',
    component: GameModeSelectorComponent,
  },
  {
    path: 'game-area',
    loadChildren: () =>
      import('../game-area/game-area.module').then((m) => m.GameAreaModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameModelSelectorRoutingModule {}
