import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { environment } from 'src/app/enviroments/enviroments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  private apiUrl = environment.apiKey;

  name: string = ''
  email: string = ""
  subject: string = ""
  description: string = ""

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  sendData() {
    if (this.name.length <= 0 || this.email.length <= 0 || this.subject.length <= 0 || this.description.length <= 0) {
      this.openSnackBar("Fill form details");
    } else if (!this.isValidEmail(this.email)) {
      this.openSnackBar("Invalid email address");
    }
    else {
      const formData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        description: this.description
      }
      this.http.post(this.apiUrl, formData, { responseType: 'text' })
        .subscribe(
          response => {
            console.log('Data sent successfully:', response.toString());
            this.openSnackBar("message sent successfully");
          },
          error => {
            console.error('Error sending data:', error);
            this.openSnackBar("error sending message");
          }
        );
    }
  }

  isValidEmail(email: string) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Got it!', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2 * 1000
    });
  }
}
