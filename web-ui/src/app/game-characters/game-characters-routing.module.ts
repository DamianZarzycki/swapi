import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { StarshipComponent } from './starship/starship.component';

const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
  },
  {
    path: 'starships',
    component: StarshipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameCharactersRoutingModule {}
