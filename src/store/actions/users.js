import { RECEIVE_USERS ,ADD_ANSWER_USER, ADD_QUESTION_USER} from "../../common/constants";


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function addAnswerUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer,
    };
}

export function addQuestionUser({author, id}) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid: id,
    };
}
