import { of } from 'rxjs';
import { Person, Starship } from '../models/swapi-models';

export const xWing: Starship = {
  id: 'starship_1',
  name: 'X-wing Starfighter',
  model: 'T-65B X-wing starfighter',
  manufacturer: 'Incom Corporation',
  cost_in_credits: '149999',
  length: '12.5',
  max_atmosphering_speed: '1050',
  crew: '1',
  passengers: '0',
  cargo_capacity: '110',
  consumables: '1 week',
  hyperdrive_rating: '1.0',
  MGLT: '100',
  starship_class: 'Starfighter',
};

export const lukeSkywalker: Person = {
  id: 1,
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19 BBY',
  gender: 'male',
  species: [],
  starships: ['X-wing', 'Imperial Speeder Bike'],
  vehicles: ['Snowspeeder', 'Imperial Speeder Bike'],
};

export const hanSolo: Person = {
  id: 2,
  name: 'Han Solo',
  height: '180',
  mass: '80',
  hair_color: 'brown',
  skin_color: 'fair',
  eye_color: 'brown',
  birth_year: '29 BBY',
  gender: 'male',
  species: [],
  starships: ['Millennium Falcon'],
  vehicles: ['Snowspeeder', 'Imperial Speeder Bike'],
};

export class HttpClientMock {
  get(url: string) {
    if (url.includes('/people/')) {
      return of(lukeSkywalker);
    } else {
      return of(xWing);
    }
  }
}
