import * as d3 from 'd3';
import { GraphInitOptions, GraphTypes } from './models';

const NODE_OPTIONS = {
  width: 80,
  height: 100,
  margin: 40,
  offsetSvg: 40,
};
export interface IGraph<T> {
  root: d3.HierarchyNode<any>;
  data: T;
}
export class Graph<T> {
  public root!: d3.HierarchyNode<any>;
  public data: T;

  constructor(_data: T, options: GraphInitOptions) {
    this.data = _data;
    this.initTree(options);
  }

  initTree(options: GraphInitOptions) {
    if (!options || !options.width || !options.height) {
      throw new Error('missing options when initializing simulation');
    }
    let layout: any;
    if (options.type === GraphTypes.PACK) {
      layout = (data: any) =>
        d3
          .pack()
          .size([options.width - 20, options.height - 20])
          .padding(4)(
          d3
            .hierarchy(data, (d: any) => {
              const items = d && d.data && d.data.length ? d.data : [];
              const arr = d && d.structure ? d.structure.concat(items) : items;
              return arr;
            })
            .sum((d) => {
              return d && d.data ? d.data.length : 0.1;
            })
            .sort((a: any, b: any) => b.value - a.value)
        );
    } else if (options.type === GraphTypes.TREE) {
      layout = (data: any) =>
        d3
          .tree()
          .size([options.width / 2, options.height / 2])
          .nodeSize([16, 48])(
          d3.hierarchy(data, (d: any) => {
            const items = d && d.data && d.data.length ? d.data : [];
            const arr = d && d.structure ? d.structure.concat(items) : items;
            return arr;
          })
        );
    } else {
      layout = (data: any) =>
        d3.partition().size([options.height, options.width]).padding(1)(
          d3.hierarchy(data).sum((d) => d.value || 0.1)
        );
    }

    this.root = layout(this.data);

    if (options.type === GraphTypes.TREE) {
      let centerX = options.width / 2;
      this.root.each((d: any, i: number) => {
        // d.width = NODE_OPTIONS.width;
        // d.height = NODE_OPTIONS.height;
        // if (d.depth > curentDepth) {
        //   curentDepth = d.depth;
        //   curentNodeIndexInRow = 0;
        // }
        // d.collapsed = d.depth > 1 ? true : false;
        // if (!d.parent) {
        //   d.x = NODE_OPTIONS.offsetSvg;
        //   d.y = NODE_OPTIONS.offsetSvg;
        //   curentNodeIndexInRow = 0;
        //   return;
        // }
        // if (d.depth === 1) {
        //   d.x = this.getHorizontalPositionInRow(0, d.depth);
        //   d.y = this.getVerticalPosition(curentNodeIndexInRow);
        //   curentNodeIndexInRow++;
        //   return;
        // }
        // d.x = this.getHorizontalPositionInRow(curentNodeIndexInRow, d.depth)
        d.x += centerX;
        d.y = d.depth * 64 + 40;
        // curentNodeIndexInRow++;
      });
      this.root.x = options.width / 2;
      this.root.y = 40;
    }

    this.root.each((d: any) => {
      d.typeOfGraph = options.type;
      if (options.type === GraphTypes.PARTITION) {
        d.width = d.y1 - d.y0;
        d.height = d.x1 - d.x0;
        d.transform = `translate(${d.y0},${d.x0})`;
      } else {
        d.transform = `translate(${d.x},${d.y})`;
      }
      return d;
    });
    //
    // // let centerY = options.height / 2 - 50;
    // // let curentNodeIndexInRow = 0;
    // // let curentDepth = 0;
  }
  private getVerticalPosition(index: number): number {
    let i = index;
    const size = this.nodeVerticalSize();
    return NODE_OPTIONS.offsetSvg + size + (size + size) * i;
  }
  private getHorizontalPositionInRow(index: number, depth: number): number {
    return (
      NODE_OPTIONS.offsetSvg +
      NODE_OPTIONS.width * depth +
      NODE_OPTIONS.margin +
      (NODE_OPTIONS.width + NODE_OPTIONS.margin) * index
    );
  }

  private nodeVerticalSize(): number {
    return NODE_OPTIONS.height + NODE_OPTIONS.margin;
  }

  private nodeHorizontalSize(): number {
    return NODE_OPTIONS.width + NODE_OPTIONS.margin;
  }
}
