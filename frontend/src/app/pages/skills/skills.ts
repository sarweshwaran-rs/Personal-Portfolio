import { Component } from '@angular/core';
import { SkillCard } from '../../shared/components/skill-card/skill-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = [
    { name: "Python", image: "/assets/images/python.svg", link: "https://www.python.org/", skill_type: "lang" },
    { name: "Java", image: "/assets/images/java.svg", link: "https://www.oracle.com/in/java/technologies/", skill_type: "lang" },
    { name: "JavaScript", image: "/assets/images/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", skill_type: "lang" },
    { name: "HTML/CSS", image: "/assets/images/html.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/", skill_type: "lang" },
    { name: "C++", image: "/assets/images/cpp.svg", link: "https://cplusplus.com/", skill_type: "lang" },
    { name: "Spring Boot", image: "/assets/images/spring-boot.svg", link: "https://spring.io/projects/spring-boot", skill_type: "F&L" },
    { name: "Node.js", image: "/assets/images/node.svg", link: "https://nodejs.org/en", skill_type: "F&L" },
    { name: "Express", image: "/assets/images/express.svg", link: "https://expressjs.com/", skill_type: "F&L" },
    { name: "React", image: "/assets/images/react.svg", link: "https://react.dev/", skill_type: "F&L" },
    { name: "MySQL", image: "/assets/images/mysql.svg", link: "https://www.mysql.com/", skill_type: "C&D" },
    { name: "PostgreSQL", image: "/assets/images/postgresql.svg", link: "https://www.postgresql.org/", skill_type: "C&D" },
    { name: "MongoDB", image: "/assets/images/mongodb.svg", link: "https://www.mongodb.com/", skill_type: "C&D" },
    { name: "Firebase", image: "/assets/images/firebase.svg", link: "https://firebase.google.com/", skill_type: "C&D" },
    { name: "Git", image: "/assets/images/git.svg", link: "https://git-scm.com/", skill_type: "T&O" },
    { name: "GitHub", image: "/assets/images/github.svg", link: "https://github.com/", skill_type: "T&O" },
    { name: "Docker", image: "/assets/images/docker.svg", link: "https://www.docker.com/", skill_type: "T&O" },
  ];

  get groupedSkills() {
    return {
      lang: this.skills.filter(s => s.skill_type === "lang"),
      FandL: this.skills.filter(s => s.skill_type === "F&L"),
      CandD: this.skills.filter(s => s.skill_type === "C&D"),
      TandO: this.skills.filter(s => s.skill_type === "T&O"),
    };
  }
}
