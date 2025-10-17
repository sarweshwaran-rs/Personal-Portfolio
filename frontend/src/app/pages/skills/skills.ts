import { Component } from '@angular/core';
import { SkillCard } from '../../shared/components/skill-card/skill-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone:true,
  imports: [CommonModule, SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = [
    { name: "Python", image: "/assets/images/python.svg", link:"https://www.python.org/" },
    { name: "Java", image: "/assets/images/java.svg", link:"https://www.oracle.com/in/java/technologies/" },
    { name: "Spring Boot", image: "/assets/images/spring-boot.svg", link:"https://spring.io/projects/spring-boot" },
    { name: "JavaScript", image: "/assets/images/javascript.svg", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Node.js", image: "/assets/images/node.svg", link:"https://nodejs.org/en" },
    { name: "Express", image: "/assets/images/express.svg", link:"https://expressjs.com/" },
    { name: "React", image: "/assets/images/react.svg", link:"https://react.dev/" },
    { name: "HTML/CSS", image: "/assets/images/html.svg", link:"https://developer.mozilla.org/en-US/docs/Web/HTML/" },
    { name: "MySQL", image: "/assets/images/mysql.svg", link:"https://www.mysql.com/" },
    { name: "PostgreSQL", image: "/assets/images/postgresql.svg", link:"https://www.postgresql.org/" },
    { name: "MongoDB", image: "/assets/images/mongodb.svg", link:"https://www.mongodb.com/" },
    { name: "Firebase", image: "/assets/images/firebase.svg", link:"https://firebase.google.com/" },
    { name: "Git", image: "/assets/images/git.svg", link:"https://git-scm.com/" },
    { name: "GitHub", image: "/assets/images/github.svg", link:"https://github.com/" },
    { name: "Docker", image: "/assets/images/docker.svg", link:"https://www.docker.com/" },
    { name: "C++", image: "/assets/images/cpp.svg", link:"https://cplusplus.com/" },
  ];
}
