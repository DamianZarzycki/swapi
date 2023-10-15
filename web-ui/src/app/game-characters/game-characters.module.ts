import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { StarshipComponent } from './starship/starship.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [PersonComponent, StarshipComponent],
  imports: [CommonModule, MatCardModule, MatSelectModule],
  exports: [PersonComponent, StarshipComponent],
})
export class GameCharactersModule {}
