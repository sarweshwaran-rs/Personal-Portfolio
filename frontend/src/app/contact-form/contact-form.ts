import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Api } from '../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
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

  onSubmit() {
    if(this.portfolioForm.valid) {
      this.api.submitContactForm(this.portfolioForm.value as any).subscribe({
        next: (res) => {
          alert('Form submitted successfully');
          this.portfolioForm.reset();
        },
        error: (err) => {
          console.log("Error submitting form: ", err);
          alert("Something went wrong. please try again!");
        }
      });
    } else {
      alert("Please fill all the required fields correctly.");
    }
  }
}
