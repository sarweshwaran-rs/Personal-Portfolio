import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactForm {
  personname: string;
  email: string;
  linkedinurl: string;
}

@Injectable({
  providedIn: 'root'
})

export class Api {
  private base = `${environment.baseApi}/contact/submit`;

  constructor(private http: HttpClient) { }

  submitContactForm(contactData: ContactForm): Observable<any> {
    return this.http.post<any>(this.base, contactData);
  }
}
