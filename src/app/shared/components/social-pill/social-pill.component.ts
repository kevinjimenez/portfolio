import { Component, input } from '@angular/core';

@Component({
  selector: 'social-pill',
  templateUrl: './social-pill.component.html',
  styleUrls: ['./social-pill.component.css'],
})
export class SocialPillComponent {
  public href = input.required<string>();
}
