import { Component, Input } from '@angular/core';
import { Link } from '../../../Models/d3/link';

@Component({
  selector: '[link]',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input('link') link!: Link;

  constructor() {}

}
