import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.initializeObserver();
  }

  private initializeObserver(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible', 'revealed');
              // Optional: Stop observing after animation triggers
              this.observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
    }
  }

  observeElement(element: Element): void {
    if (this.observer && element) {
      this.observer.observe(element);
    }
  }

  observeElements(selector: string): void {
    if (typeof document !== 'undefined') {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        this.observeElement(element);
      });
    }
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}