import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule,  MatButtonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})

export class ContactForm {
  constructor(private api: Api) { }
  
  portfolioForm = new FormGroup({
    personname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    linkedinurl: new FormControl('', [Validators.pattern(/^https?:\/\/(www\.)?linkedin\.com/)])
  });
  
  private snackbar = inject(MatSnackBar);
  
  protected onSubmit() {
    if(this.portfolioForm.valid) {
      this.api.submitContactForm(this.portfolioForm.value as any).subscribe({
        next: (res) => {
          //alert('Form submitted successfully');
          this.snackbar.open("Details Submitted Successfully!", 'Dismiss', {
            duration: 2000,
            panelClass: ['snackbar-success']
          });
          this.portfolioForm.reset();
        },
        error: (err) => {
          console.log("Error submitting form: ", err);
          this.snackbar.open("Form not submitted try again!", "Dismiss", {
            duration: 2000,
            panelClass: ['snackbar-failure']
          });
          //alert("Something went wrong. please try again!");
          this.portfolioForm.reset();
        }
      });
    }
  }
}
