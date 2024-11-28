import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    class: 'flex justify-center items-center py-5',
  },
})
export class HeaderComponent {
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    console.log(window.scrollY);
  }
}
