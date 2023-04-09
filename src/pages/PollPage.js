import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NotFound from "../components/NotFound";
import { handleAddAnswer } from "../store/actions/questions";
import { Grid } from "@mui/material";
import { calculatePercentage } from "../services/pollService";

const PollPage = ({ dispatch, authedUser, question, author }) => {
  const navigate = useNavigate();

  if (!authedUser || !question || !author) {
    return <NotFound/>
  }

  const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="font-bold">Poll by {author.id}</h1>

      <div className="container">
        <h2 className="font-bold">Would you rather?</h2>
        <hr></hr>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className={hasVotedForOptionOne ? "chosen" : ""}>
              <p className="font-bold mb-2">{question.optionOne.text}</p>
              {!hasVoted && (
                <button
                  type="button"
                  class="btn btn-success  btn-block"
                  onClick={handleOptionTwo}
                > 
                  Click
                </button>
              )}
              {hasVoted && (
                <p className="text-xs">
                  Votes: {question.optionOne.votes.length} (
                  {calculatePercentage("optionOne", question)})
                </p>
              )}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={hasVotedForOptionTwo ? "chosen" : ""}>
            <p className="font-bold mb-2">{question.optionTwo.text}</p>
            {!hasVoted && (
              <button
                type="button"
                class="btn btn-success  btn-block"
                onClick={handleOptionOne}
              >
                Click
              </button>
            )}
            {hasVoted && (
              <p className="text-xs">
                Votes: {question.optionTwo.votes.length} (
                {calculatePercentage("optionTwo", question)})
              </p>
            )}
            </div>         
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authedUser, question, author };
  } catch (e) {
    return <NotFound />;
  }
};

export default connect(mapStateToProps)(PollPage);
