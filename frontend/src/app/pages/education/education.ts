import { Component } from '@angular/core';
import { EducationCard } from '../../shared/components/education-card/education-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true, 
  imports: [CommonModule, EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  educations = [
    {
      education: "Integrated PG",
      grade: "8.31",
      class: "M.Tech (Software Engineering)",
      name: "Vellore Institute of Technology",
      logo: "/assets/images/vit-logo.jpg",
      duration: "2021-2026",
      status: "Final Year" 
    },
    {
      education: "Higher Secondary Certificate",
      grade: "89.8%",
      class: "XI to XII",
      name: "Lakshmi Garden Maticulation Higher Secondary School",
      logo: "/assets/images/lgms-school-logo.png",
      duration: "2019-2021",
      status: "Completed"     
    },
    {
      education: "Secondary School Certificate",
      grade: "92%",
      class: "VI to X",
      name: "Seventh Day Adventist Matrication Higher Secondary School",
      logo: "/assets/images/sda-vellore.png",
      duration: "2014-2019",
      status:  "Completed"    
    }
  ];
}
