import { Directive, Input, ElementRef } from '@angular/core';
import { GraphService } from '../../Services/graph/graph.service';

@Directive({
  selector: '[zoomableOf]',
})
export class ZoomableDirective<T> {
  @Input('zoomableOf') zoomableOf!: ElementRef;

  constructor(
    private graphService: GraphService<T>,
    private _element: ElementRef
  ) {}

  ngOnInit() {
    this.graphService.applyZoomableBehaviour(this.zoomableOf, this._element);
  }
}
