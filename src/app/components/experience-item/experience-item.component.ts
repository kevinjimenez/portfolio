import { Component, input } from '@angular/core';
import { Experience } from '../../constants/data';
import { ChevronCompactRightComponent } from '../../shared/components/icons/chevron-compact-right.component';

@Component({
  selector: 'experience-item',
  imports: [ChevronCompactRightComponent],
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
})
export class ExperienceItemComponent {
  public experience = input.required<Experience>();
}
