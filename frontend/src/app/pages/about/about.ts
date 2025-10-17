import { Component, OnInit } from '@angular/core';
import { AboutDetails } from './about-details/about-details';

@Component({
  selector: 'app-about',
  imports: [AboutDetails],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  
  private roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Technology Enthusiast'
  ];

  private roleIndex = 0;
  private charIndex = 0;
  private typingSpeed = 100;
  private erasingSpeed = 50;
  private delayBetweenRoles = 2000;

  ngOnInit(): void {
      this.typeRole();
  }

  private typeRole() : void {
    const roleTextElement = document.getElementById('role-text');
    if(!roleTextElement) return;

    if(this.charIndex < this.roles[this.roleIndex].length) {
      roleTextElement.textContent = this.roles[this.roleIndex].substring(0, this.charIndex+1);
      this.charIndex++;
      setTimeout(()=> this.typeRole(), this.typingSpeed);
    } else {
      setTimeout(()=> this.eraseRole(), this.delayBetweenRoles);
    }
  }

  private eraseRole() : void {
    const roleTextElement = document.getElementById('role-text');
    if(!roleTextElement) return;

    if(this.charIndex > 0) {
      roleTextElement.textContent = this.roles[this.roleIndex].substring(0, this.charIndex-1);
      this.charIndex--;
      setTimeout(()=> this.eraseRole(), this.erasingSpeed);
    } else {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      setTimeout(()=> this.typeRole(), 500);
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline:'start' });
    }
  }
}
