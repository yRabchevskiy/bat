import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss',
    standalone: false
})
export class AppHeaderComponent {
  constructor(private router: Router) {}

  onClick($param: string): void {
    this.router.navigate([$param]);
  }
}
