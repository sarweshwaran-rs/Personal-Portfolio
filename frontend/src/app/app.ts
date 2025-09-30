import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from "./contact-form/contact-form";
import { Education } from "./pages/education/education";
import { Skills } from "./pages/skills/skills";
import { About } from "./pages/about/about";
import { Publications } from "./pages/publications/publications";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactForm, Education, Skills, About, Publications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
