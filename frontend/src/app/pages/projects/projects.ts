import { Component } from '@angular/core';
import { ProjectCard, Project } from '../../shared/components/project-card/project-card';
import { Api } from '../../services/api';
import { Observable, of } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard, AsyncPipe],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class Projects {
  projects$: Observable<Project[]>;

  constructor(private api : Api) {
    this.projects$ = this.api.getProjects().pipe(
      delay(5000),
      tap(data => console.log(`Projects fetched: ${JSON.stringify(data,null,2)}`)),
      catchError(error => {
        console.log(`Failed to fetch project: ${error}`);
        return of([]);
      })
    );
  }
}
