import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-card',
  standalone: true,
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
  imports: [CommonModule]
})

export class EducationCard {
  @Input() education: any;
}
