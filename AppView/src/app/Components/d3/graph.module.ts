import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { LinkComponent } from './link/link.component';
import { NodeComponent } from './node/node.component';
import { DraggableDirective } from '../../Directives/Graph/drag.directive';
import { ZoomableDirective } from '../../Directives/Graph/zoom.directive';
import { GeneralModule } from '../General/general.module';

@NgModule({
  declarations: [
    GraphComponent,
    LinkComponent,
    NodeComponent,
    DraggableDirective,
    ZoomableDirective,
  ],
  imports: [CommonModule, GeneralModule],
  exports: [
    GraphComponent,
    LinkComponent,
    NodeComponent,
    DraggableDirective,
    ZoomableDirective,
  ],
})
export class GraphModule {}
