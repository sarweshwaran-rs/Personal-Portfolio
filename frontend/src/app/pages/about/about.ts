import { Component } from '@angular/core';
import { AboutDetails } from './about-details/about-details';

@Component({
  selector: 'app-about',
  imports: [AboutDetails],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'start' });
        }
      }
}
