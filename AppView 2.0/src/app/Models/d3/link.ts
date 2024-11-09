// path : d3/models/link.ts
import { ITreeNode } from './node';

// Implementing SimulationLinkDatum interface into our custom Link class
export class Link {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    
    // Must - defining enforced implementation properties
    source: ITreeNode;
    target: ITreeNode;
    
    constructor(source: ITreeNode, target: ITreeNode) {
        this.source = source;
        this.target = target;
    }
}