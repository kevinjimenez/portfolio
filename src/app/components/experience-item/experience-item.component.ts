import { Component, input } from '@angular/core';
import { Experience } from '../../constants/data';

@Component({
  selector: 'experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent {
  public experience = input.required<Experience>();
}
