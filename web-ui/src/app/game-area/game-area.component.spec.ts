import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { GameAreaComponent } from './game-area.component';
import { PersonComponent } from '../game-characters/person/person.component';
import { MatCardModule } from '@angular/material/card';
import { StarshipComponent } from '../game-characters/starship/starship.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GameAreaComponent', () => {
  let component: GameAreaComponent;
  let fixture: ComponentFixture<GameAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameAreaComponent, PersonComponent, StarshipComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(GameAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
