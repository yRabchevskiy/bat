import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITreeNode } from '../../../Models/d3/node';
import { GraphService } from '../../../Services/graph/graph.service';

@Component({
    selector: '[node]',
    templateUrl: './node.component.html',
    styleUrl: './node.component.scss',
    standalone: false
})
export class NodeComponent {
  @Input('node') node!: ITreeNode;
  @Output() handleClick: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>;
  constructor(private _graphService: GraphService<any>) {
  }

  ngOnInit() {
    if (!this.node.data.structure) {
      console.log(this.node);
    }
  }

  onClick($event: any) {
    if (!this.node.children) return;
    this.handleClick.emit(this.node);
  }
}
