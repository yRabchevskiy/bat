// path : d3/d3.service.ts
import { ElementRef, Injectable } from '@angular/core';
import * as d3 from 'd3';
import { ITreeNode } from '../../Models/d3/node';
import { GraphInitOptions } from '../../Models/d3/models';
import { IGraph, Graph } from '../../Models/d3/Graph';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GraphService<T> {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */

  graphObserver = new BehaviorSubject<{
    nodes: ITreeNode[];
    links: d3.HierarchyLink<any>[];
  }>({ nodes: [], links: [] });

  _graphObserver = this.graphObserver.asObservable();

  graph!: IGraph<T>;
  root!: d3.HierarchyNode<any>;
  nodes: ITreeNode[] = [];
  links: d3.HierarchyLink<any>[] = [];
  zoom: any = d3.zoom();
  dispather = d3.dispatch('zoom_in', 'zoom_out');

  constructor() {}

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement: ElementRef, containerElement: ElementRef) {
    const svg = d3.select(svgElement.nativeElement);
    const container = d3.select(containerElement.nativeElement);

    function zoomed(event: any) {
      const transform = event.transform;
      container.attr(
        'transform',
        `translate(${transform.x},${transform.y}) scale(${transform.k})`
      );
    }

    const zoomIn = (event: any) => {
      this.zoom.scaleBy(svg.transition().duration(750), 1.2);
    };

    const zoomOut = (event: any) => {
      this.zoom.scaleBy(svg.transition().duration(750), 0.8);
    };

    this.zoom.on('zoom', zoomed);

    svg.call(this.zoom).on('dblclick.zoom', null);
    this.dispather.on('zoom_in', zoomIn).on('zoom_out', zoomOut);
  }

  zoomIn() {
    this.dispather.call('zoom_in');
  }
  zoomOut() {
    this.dispather.call('zoom_out');
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(id: string): void {
    const el = d3.select(id) as any;
    const drag = d3
      .drag()
      .on('start', (event, d) => {
        console.log('Drag start:', event, d);
        
      })
      .on('drag', (event, d) => {
        el.attr('x', event.x).attr('y', event.y);
      })
      .on('end', (event, d) => {
        el.attr('x', event.x).attr('y', event.y);
      });

    // Apply the drag behavior to a D3 selection
    el.call(drag);
  }

  createItem(svgElement: ElementRef) {
    const svg = d3.select(svgElement.nativeElement);
    const g = svg.select('#app-g-container');
    g.append('rect')
      .attr('id', 'fake-rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('fill', 'black')
      .attr('pointer-event', 'all');

    const rect = g.select('#fake-rect');
    this.applyDraggableBehaviour('#fake-rect');
  }

  expandeCollapseNode(node: ITreeNode, index: number) {
    if (!node.children) return;
    this.root.each((d) => {
      if (d.data.id !== node.data.id) return;
      this.expandCollapse(d);
    });
    this.nodes = this.root.descendants() as ITreeNode[];
    this.links = this.root.links();
    this.graphObserver.next({ nodes: this.nodes, links: this.links });
  }

  getGraph(data: any, options: GraphInitOptions) {
    this.graph = new Graph(data, options);
    this.root = this.graph.root;
    this.nodes = this.root.descendants() as ITreeNode[];
    this.links = this.root.links();
    this.graphObserver.next({ nodes: this.nodes, links: this.links });
  }

  private expandCollapse(node: any) {
    if (!node || !node.children) {
      return;
    }
    node.collapsed = !node.collapsed;
    node.children = node.collapsed ? [] : node._children;
  }
}
