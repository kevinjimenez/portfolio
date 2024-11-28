import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from '../../constants/data';

@Component({
  selector: 'projects',
  imports: [NgComponentOutlet],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  public projects = PROJECTS;
  public tagInputs = {
    customClass: 'size-4',
  };
}
