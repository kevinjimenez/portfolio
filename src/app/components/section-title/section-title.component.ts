import { Component } from '@angular/core';

@Component({
  selector: 'section-title',
  template: `
    <h2
      class="text-2xl font-semibold mb-6 flex items-center gap-x-3 text-brand-primary"
    >
      <ng-content />
    </h2>
  `,
  // host: {
  //   class: 'text-2xl font-semibold mb-6 flex items-center gap-x-3',
  // },
})
export class SectionTitleComponent {
  constructor() {}
}
