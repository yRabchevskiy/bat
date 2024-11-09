import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from '../../../Models/pages/pages';

@Component({
  selector: 'app-page-link',
  templateUrl: './page-link.component.html',
  styleUrl: './page-link.component.scss'
})
export class PageLinkComponent {
  @Input() page!: IPage;

  constructor(private router: Router) {}

  onClick($param: string): void {
    this.router.navigate([$param]);
  }
}
