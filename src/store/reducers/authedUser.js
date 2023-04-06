import { LOGOUT_AUTH_USER, SET_AUTH_USER } from "../../common/constants";


export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.authedUser;
    case LOGOUT_AUTH_USER:
      return null;
    default:
      return state;
  }
}
