import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-winner-dialog',
  templateUrl: './show-winner-dialog.component.html',
  styleUrls: ['./show-winner-dialog.component.scss'],
})
export class ShowWinnerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowWinnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
