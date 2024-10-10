export enum GraphTypes {
    TREE = 'Tree',
    PACK = 'Pack',
    PARTITION = 'Partition',
    TABLE = 'Table'
}
export interface GraphInitOptions {
    width: number;
    height: number;
    type: GraphTypes;
}
