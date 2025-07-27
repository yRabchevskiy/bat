import { IVlk } from '../interfaces/vlk';

export interface IVlkState {
  error: string | null;
  loading: boolean;

  vlks: IVlk[];
  selectedVlk: IVlk | null;
}

export const initialVlkState: IVlkState = {
  error: null,
  loading: false,
  vlks: [],
  selectedVlk: null,
};
