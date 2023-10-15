import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/swapi-models';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() person?: Person;
}
