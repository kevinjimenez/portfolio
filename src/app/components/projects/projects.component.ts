import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from '../../constants/data';
import { GithubComponent } from '../../shared/components/icons/github.component';

@Component({
  selector: 'projects',
  imports: [NgComponentOutlet, GithubComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  public projects = PROJECTS;
  public tagInputs = {
    customClass: 'size-4',
  };
}
