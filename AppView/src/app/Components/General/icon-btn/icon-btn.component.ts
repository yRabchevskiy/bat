import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrl: './icon-btn.component.scss',
})
export class IconBtnComponent {
  @Input() label: string = '';
  @Input() svgIconPath: string = '';
  @Input() iconWidth: string = '100%';
  @Input() iconHeight: string = '100%';
  @Input() style!: Object;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  onClickBtn($event: any) {
    this.onClick.emit($event);
  }
}
