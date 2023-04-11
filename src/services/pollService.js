import { _getUsers ,_getQuestions,_saveQuestion,_saveQuestionAnswer} from "../data/_DATA";
import { receiveQuestions } from "../store/actions/questions";
import { receiveUsers } from "../store/actions/users";


export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function calculatePercentage(option, question)  {
    const numberVotesTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    if(option === "optionOne") {
        return (
            Math.round((question.optionOne.votes.length / numberVotesTotal) * 100,2) + " %"
        );
    } else {
        return (
            Math.round((question.optionTwo.votes.length / numberVotesTotal) * 100,2) + " %"
        );
    }
  };

export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({optionOneText, optionTwoText, author});
}

export function getQuestions() {
    return (dispatch) => {
        return getInitialData().then((questions) => {
            dispatch(receiveQuestions(questions));
        });
    };
}

export function saveQuestionAnswer(authedUserId, qid, answer) {
    return _saveQuestionAnswer({
        authedUser: authedUserId,
        qid,
        answer
    });
}

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}
