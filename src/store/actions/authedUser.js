import { SET_AUTH_USER ,LOGOUT_AUTH_USER} from "../../common/constants";

export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTH_USER,
        authedUser,
    };
}

export function logoutAuthedUser() {
    return {
        type: LOGOUT_AUTH_USER,
    };
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const {users} = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (user) {
            return dispatch(setAuthedUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(logoutAuthedUser());
    };
}
