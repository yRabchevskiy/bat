import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './Graph/drag.directive';
import { ZoomableDirective } from './Graph/zoom.directive';

@NgModule({
  declarations: [
    DraggableDirective,
    ZoomableDirective,
  ],
  imports: [CommonModule],
  exports: [
    DraggableDirective,
    ZoomableDirective,
  ],
})
export class DirectivesModule {}
