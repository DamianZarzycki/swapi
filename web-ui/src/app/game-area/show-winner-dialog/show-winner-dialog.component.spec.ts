import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ShowWinnerDialogComponent } from './show-winner-dialog.component';
import { MatIconModule } from '@angular/material/icon';

describe('ShowWinnerDialogComponent', () => {
  let component: ShowWinnerDialogComponent;
  let fixture: ComponentFixture<ShowWinnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowWinnerDialogComponent],
      imports: [MatIconModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowWinnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
