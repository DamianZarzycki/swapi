import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameAreaComponent } from './game-area.component';

const routes: Routes = [
  {
    path: '',
    component: GameAreaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameAreaRoutingModule {}
