import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from '../../../Models/pages/pages';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() selectedPage!: string;
  @Input() pages: IPage[] = [];
  constructor(private router: Router) {}

  onClick($param: string): void {
    this.router.navigate([$param]);
  }
}
