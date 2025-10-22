import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  menuOpen = false;
  scrolled = false;
  hidden = false;
  activeSection = 'hero';
  private lastScrollTop = 0;
  private isMobile = false;

  // Define the sections name's
  private sections = ['hero', 'about-me', 'education', 'skills', 'publications', 'projects', 'contact'];

  constructor() {
    this.checkIfMobile();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.checkIfMobile();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    this.scrolled = scrollTop > 20;

    this.hidden = false;

    // Update active section based on scroll position
    this.updateActiveSection();

    this.lastScrollTop = scrollTop;
  }

  private updateActiveSection() {
    const offset = this.isMobile ? 100 : 120; 
    const previousActiveSection = this.activeSection;
    
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          this.activeSection = this.sections[i];
          break;
        }
      }
    }

    if (previousActiveSection !== this.activeSection) {
      this.animateActiveSection();
    }
  }

  private animateActiveSection() {
    this.sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.classList.remove('active', 'fade-in');
      }
    });

    const activeSection = document.getElementById(this.activeSection);
    if (activeSection) {
      activeSection.classList.add('active', 'fade-in');
      
      setTimeout(() => {
        activeSection.classList.remove('fade-in');
      }, 800);
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = this.isMobile ? 65 : 80;
      const elementPosition = element.offsetTop - offset;
      
      this.activeSection = sectionId;
      this.animateActiveSection();
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
