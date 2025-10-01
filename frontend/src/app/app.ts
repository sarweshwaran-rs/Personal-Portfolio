import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./pages/about/about";
import { Skills } from "./pages/skills/skills";
import { Education } from "./pages/education/education";
import { Publications } from "./pages/publications/publications";
import { Projects } from "./pages/projects/projects";
import { ContactForm } from "./contact-form/contact-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Education, Skills, Publications, Projects,ContactForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
