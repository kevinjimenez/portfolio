import { Component } from '@angular/core';

@Component({
  selector: 'badge',
  template: `<ng-content />`,
  host: {
    class:
      'bg-brand-primary text-brand-secundary text-xs font-medium me-2 px-2.5 py-0.5 rounded',
  },
})
export class BadgeComponent {}
