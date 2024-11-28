import { Component, input } from '@angular/core';

@Component({
  selector: 'section-container',
  template: `
    <section class="{{ customClass() }} w-full mx-auto lg:w-[740px] pb-24">
      <ng-content />
    </section>
  `,
})
export class SectionContainerComponent {
  public customClass = input('');
}
