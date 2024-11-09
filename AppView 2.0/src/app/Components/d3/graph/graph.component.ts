import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { GraphService } from '../../../Services/graph/graph.service';
import { GraphInitOptions, GraphTypes } from '../../../Models/d3/models';
import { ITreeNode } from '../../../Models/d3/node';

@Component({
  selector: 'app-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent<T> {
  @ViewChild('svg') svg!: ElementRef;
  
  nodes: any[] = [];
  links: any[] = [];
  graphTypes = GraphTypes;

  private _data: T | null = null;
  @Input() set data(value: T | null) {
    this._data = value;
    if (!value) return;
    this.graphService.getGraph(this.data, this.options);
  }

  get data() {
    return this._data;
  }

  private _options: GraphInitOptions = { width: 800, height: 600, type: GraphTypes.PACK };

  set options(opt: GraphInitOptions) {
    this._options = opt;
    this.graphService.getGraph(this.data, this._options);
  }
  get options() {
    return this._options;
  }

  constructor(
    private graphService: GraphService<T>,
    private ref: ChangeDetectorRef,
    private _svg: ElementRef
  ) {
    this.svg = this._svg;
    this.graphService.graphObserver.subscribe((_data: { nodes: any[], links: any[]}) => {    
      this.nodes = _data.nodes;
      this.links = _data.links;
    });
  }

  ngAfterViewInit() {
    const w = document.body.clientWidth - 40;
    const h = document.body.clientHeight - 72;
    this.options = { width: w, height: h, type: this.options.type };
  }

  onClickNode($event: ITreeNode, index: number) {
    this.graphService.expandeCollapseNode($event, index);
  }

  onZoomIn() {
    this.graphService.zoomIn();
  }
  onZoomOut() {
    this.graphService.zoomOut();
  }

  onChangeTypeView(type: string) {
    const w = document.body.clientWidth - 40;
    const h = document.body.clientHeight - 72;
    this.options = { width: w, height: h, type: type as GraphTypes };
  }
  
}
