import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-password-dialog',
  standalone: true,
  styleUrls: ['./password-dialog-component.css'],
  templateUrl: './password-dialog-component.html',
  imports: [FormsModule, MatButtonModule],
})
export class PasswordDialogComponent {
  password?: string;
  hidePassword = true;
  constructor(
    public dialogRef: MatDialogRef<PasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: unknown,
  ) {}
}
