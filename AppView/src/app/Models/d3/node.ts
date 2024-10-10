import { GraphTypes } from "./models";

export interface ITreeNode extends d3.HierarchyNode<any> {
  x: number;
  y: number;
  width: number;
  height: number;
  r?: number;
  data: any;
  children: any[];
  value: number | undefined;
  id: string;
  index: number;
  collapsed: boolean;
  transform: string;
  typeOfGraph: GraphTypes;
}

