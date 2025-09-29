import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from "./contact-form/contact-form";
import { Education } from "./pages/education/education";
import { Skills } from "./pages/skills/skills";
import { About } from "./pages/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactForm, Education, Skills, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
