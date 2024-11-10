import { USER_ACTIONS } from "../actions/user.action";
import { initialUserState, IUserState } from "../state/user.state";
import { UserActions } from './../actions/user.action';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case USER_ACTIONS.GetUsersSuccess: {
      return { ...state, users: action.payload };
    }
    case USER_ACTIONS.GetUserSuccess: {
      return { ...state, selectedUser: action.payload }
    }
    default: {
      return state;
    }
  }
};