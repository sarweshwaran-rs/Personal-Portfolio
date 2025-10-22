import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./pages/about/about";
import { Skills } from "./pages/skills/skills";
import { Education } from "./pages/education/education";
import { Publications } from "./pages/publications/publications";
import { Projects } from "./pages/projects/projects";
import { ContactForm } from "./pages/contact-form/contact-form";
import { Navbar } from "./shared/components/navbar/navbar";
import { Footer } from "./footer/footer";
import { ScrollAnimationService } from "./shared/services/scroll-animation.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Education, Skills, Publications, Projects, ContactForm, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnDestroy {

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit(): void {
    // Initialize any app-level animations
  }

  ngAfterViewInit(): void {
    // Set up scroll animations after view is initialized
    setTimeout(() => {
      this.initializeScrollAnimations();
    }, 100);
  }

  ngOnDestroy(): void {
    this.scrollAnimationService.disconnect();
  }

  private initializeScrollAnimations(): void {
    // Observe sections for scroll animations
    this.scrollAnimationService.observeElements('.scroll-reveal');
    
    // Initialize section animations - set hero as active by default
    setTimeout(() => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.classList.add('active');
      }
    }, 100);
  }
}
