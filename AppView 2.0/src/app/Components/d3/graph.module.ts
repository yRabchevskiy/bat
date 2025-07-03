import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { LinkComponent } from './link/link.component';
import { NodeComponent } from './node/node.component';
import { GeneralModule } from '../General/general.module';
import { DirectivesModule } from '../../Directives/directives.module';

@NgModule({
  declarations: [
    GraphComponent,
    LinkComponent,
    NodeComponent,
  ],
  imports: [CommonModule, GeneralModule, DirectivesModule],
  exports: [
    GraphComponent,
    LinkComponent,
    NodeComponent,
  ],
})
export class GraphModule {}
