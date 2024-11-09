export interface IBatMapItem {
  name: string;
  status: string;
  rank: string;
  position: string;
  id: string;
}

export interface IBatMapSubStructure {
  name: string;
  id: string;
  data: IBatMapItem[];
  structure: IBatMapSubStructure[];
}

export interface IBatMapStructure {
  name: string;
  id: string;
  structure: IBatMapSubStructure[];
}

export interface IBatMapCombat {
  name: string;
  rank: string;
}
export interface IBatMap {
  id: string;
  union_name: string;
  bat_name: string;
  vch_name: string;
  combat: IBatMapCombat;
  version: string;
  structure: IBatMapStructure[];
}
