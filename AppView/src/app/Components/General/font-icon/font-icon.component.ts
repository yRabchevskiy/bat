import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-font-icon',
  templateUrl: './font-icon.component.html',
  styleUrl: './font-icon.component.scss'
})
export class FontIconComponent {
  @Input() icon: string = '';
  @Input() size: string = '40px';
  @Input() fontSize: string = '28px';
}
