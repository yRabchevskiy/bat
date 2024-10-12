export interface ICombat {
    name: string;
    rank: string;
}

export interface ISubStructureData {
    name: string;
    status: string;
    rank: string;
    position: string;
    id: string;
}
export interface ISubStructure {
    name: string;
    id: string;
    data: ISubStructureData[];
    structure: ISubStructure[];
}

export interface IStructure {
    name: string;
    id: string;
    structure: ISubStructure[];
}
export interface IBatStructure {
    _id?: string;
    id: string;
    union_name: string;
    bat_name: string;
    vch_name: string;
    combat: ICombat;
    version: string;
    structure: IStructure[];
}