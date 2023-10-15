import { Component, Input } from '@angular/core';
import { Starship } from 'src/app/models/swapi-models';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
})
export class StarshipComponent {
  @Input() starship?: Starship;
}
