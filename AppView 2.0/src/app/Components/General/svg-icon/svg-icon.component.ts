import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrl: './svg-icon.component.scss',
    standalone: false
})
export class SvgIconComponent {
  @HostBinding('style.background-image') @Input() path: string = '';
  @HostBinding('style.width') @Input() width: string = '24px';
  @HostBinding('style.height') @Input() height: string = '24px';

  // @Input() set path(filePath: string) {
  //   this._path = `url("${filePath}")`;
  // }

  // @Input() set width(w: string) {
  //   this._width = `${w}px`;
  // }

  // @Input() set height(h: string) {
  //   this._height = `${h}px`;
  // }
}
