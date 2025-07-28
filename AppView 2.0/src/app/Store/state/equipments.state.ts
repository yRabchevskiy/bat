import { IEquipment } from "../interfaces/equipments";


export interface IEquipmentsState {
  error: string | null;
  loading: boolean;

  equipments: IEquipment[];
  selectedItem: IEquipment | null;
}

export const initialEquipmentState: IEquipmentsState = {
  error: null,
  loading: false,
  equipments: [],
  selectedItem: null,
};
