import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import QuestionCard from "../components/QuestionCard";

const Dashboard = ({ authedUser, questions, users }) => {
  console.log('questions',questions);
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9" data-testid="heading">
        {authedUser.name}
      </h1>

      <h2 className="text-2xl font-bold mt-6">New Questions</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {questions.filter(unanswered).map((question) => (
          <Grid item xs={2} sm={4} md={4}>
            <QuestionCard question={question}  />
          </Grid>
        ))}
      </Grid>

      <h2 className="text-2xl font-bold mt-6">Answered Questions</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {questions.filter(answered).map((question) => (
          <Grid item xs={2} sm={4} md={4}>
            <QuestionCard question={question}  />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
