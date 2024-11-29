import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
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
