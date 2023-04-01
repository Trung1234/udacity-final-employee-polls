import {configureStore} from '@reduxjs/toolkit';
import authedUser from "./store/reducers/authedUser";
import users from "./store/reducers/users";
import questions from "./store/reducers/questions";

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions,
  },
});
