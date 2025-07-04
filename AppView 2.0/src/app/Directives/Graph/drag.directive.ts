import { Directive, Input, ElementRef } from '@angular/core';
import { ITreeNode } from '../../Models/d3/node';
import { GraphService } from '../../Services/graph/graph.service';

@Directive({
    selector: '[draggableNode]',
    standalone: false
})
export class DraggableDirective<T> {
    @Input('draggableNode') draggableNode!: ITreeNode;

    constructor(private graphService: GraphService<T>, private _element: ElementRef) { }

    ngOnInit() {
        this.graphService.applyDraggableBehaviour(this._element.nativeElement);
    }
}