import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    class: 'flex justify-center items-center py-5',
  },
})
export class HeaderComponent {
  // currentFragment: string = '';
  public currentFragment = signal<string>('');

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Captura el fragmento actual de la URL
        const url = this.router.url;
        this.currentFragment.set(url.includes('#') ? url.split('#')[1] : '');
      }
    });
  }

  public isActiveFragment(fragment: string): boolean {
    return this.currentFragment() === fragment;
  }
}
