import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-font-icon',
    templateUrl: './font-icon.component.html',
    styleUrl: './font-icon.component.scss',
    standalone: false
})
export class FontIconComponent {
  @Input() icon: string = '';
}
