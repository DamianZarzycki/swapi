import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { StarshipComponent } from './starship.component';

describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarshipComponent],
      imports: [MatCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
