import { IRemission } from "../interfaces/remission";

export interface IRemissionState {
  error: string | null;
  loading: boolean;

  remissions: IRemission[];
  selectedRemission: IRemission | null;
}

export const initialRemissionState: IRemissionState = {
  error: null,
  loading: false,
  remissions: [],
  selectedRemission: null,
}