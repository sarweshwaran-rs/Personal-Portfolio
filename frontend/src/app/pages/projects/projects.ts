import { Component } from '@angular/core';
import { ProjectCard, Project } from '../../shared/components/project-card/project-card';
import { Api } from '../../services/api';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class Projects {
  projects$: Observable<Project[]>;
  showAll = false;

  constructor(private api : Api) {
    this.projects$ = this.api.getProjects().pipe(
      delay(5000),
      catchError(error => {
        console.log(`Failed to fetch project: ${error}`);
        return of([]);
      })
    );
  }

  toggleView() {
    this.showAll = !this.showAll;
  }
}
