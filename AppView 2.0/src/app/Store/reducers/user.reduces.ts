import { getUsersSuccess, getUserSuccess } from "../actions/user.action";
import { initialUserState, IUserState } from "../state/user.state";
import { createReducer, on } from "@ngrx/store";


export const userReducers = createReducer(initialUserState,
  on(getUserSuccess, (state: IUserState, props) => ({ ...state, selectedUser: props.user })),
  on(getUsersSuccess, (state: IUserState, props) => {
    return { ...state, users: props.users };
  })
);