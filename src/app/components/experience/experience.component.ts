import { Component } from '@angular/core';
import { EXPERIENCES } from '../../constants/data';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';

@Component({
  selector: 'experience',
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  public experiences = EXPERIENCES;
}
