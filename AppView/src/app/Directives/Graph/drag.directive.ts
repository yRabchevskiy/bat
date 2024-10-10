import { Directive, Input, ElementRef } from '@angular/core';
import { ITreeNode } from '../../Models/d3/node';
import { GraphService } from '../../Services/graph/graph.service';
import { Graph } from '../../Models/d3/Graph';

@Directive({
    selector: '[draggableNode]'
})
export class DraggableDirective<T> {
    @Input('draggableNode') draggableNode!: ITreeNode;
    @Input('draggableInGraph') draggableInGraph!: Graph<T>;

    constructor(private graphService: GraphService<T>, private _element: ElementRef) { }

    ngOnInit() {
        this.graphService.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    }
}