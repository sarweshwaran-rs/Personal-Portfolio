import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  isFork: boolean;
  owner: string;
  ownerUrl: string;
  viewerPermission: string;
  viewerHasStarred: boolean;
  contributionStatus: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css']
})

export class ProjectCard {
  @Input() project! : Project;

  transformStyle = '';

  onMouseMove(event: MouseEvent) {
    const card = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - card.left;
    const y = event.clientY - card.top;

    const rotateX = ((y / card.height) - 0.5) * 15;
    const rotateY = ((x / card.width) - 0.5) * -15;

    this.transformStyle = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  resetTransform() {
    this.transformStyle = 'rotateX(0) rotateY(0) scale(1)';
  }
}
