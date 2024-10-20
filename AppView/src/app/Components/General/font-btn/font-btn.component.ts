import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-font-btn',
  templateUrl: './font-btn.component.html',
  styleUrl: './font-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontBtnComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() size: string = '40px';
  @Input() color: string = 'var(--dark)';
  @Input() fontSize: string = '28px';
  @Input() url: string = '';
  @Input() useAsLink: boolean = false;
  
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  doCLick($event: any) {
    this.onClick.emit($event);
  }
}
