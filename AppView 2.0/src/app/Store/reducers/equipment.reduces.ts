import { createReducer, on } from "@ngrx/store";
import { IEquipmentsState, initialEquipmentState } from "../state/equipments.state";
import { getEquipments, getEquipmentsSuccess, getEquipmentsFailure, postEquipment, postEquipmentSuccess, postEquipmentFailure } from "../actions/equipment.action";


export const equipmentReducers = createReducer(initialEquipmentState,  
  on(getEquipments, (state: IEquipmentsState) => ({ ...state, loading: true, error: null })),
  on(getEquipmentsSuccess, (state: IEquipmentsState, props) => ({ ...state, equipments: props.data, loading: false, error: null })),
  on(getEquipmentsFailure, (state: IEquipmentsState, props) => ({ ...state, equipments: [], loading: false, error: props.error })),

  on(postEquipment, (state: IEquipmentsState, props) => ({ ...state, loading: true, error: null })),
  on(postEquipmentSuccess, (state: IEquipmentsState, props) => ({ ...state, equipments: [...state.equipments, props.item], loading: false, error: null })),
  on(postEquipmentFailure, (state: IEquipmentsState, props) => ({ ...state, loading: false, error: props.error })),

);