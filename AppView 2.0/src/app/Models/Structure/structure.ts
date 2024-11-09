export interface ICombat {
    name: string;
    rank: string;
    soldier_id?: string;
}

export interface ISubStructureData {
    name: string;
    soldier_id?: string;
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
    _id?: string;
    name: string;
    data: ISubStructure[];
}

export interface IStructurePostData extends IStructure {
    structure_id: string;
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