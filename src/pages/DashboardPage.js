import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import QuestionCard from "../components/QuestionCard";
import React from "react";

const Dashboard = ({ authedUser, questions, users }) => {
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
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            data-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Unanswered Questions
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            data-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Answered Questions
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {questions.filter(unanswered).map((question) => (
              <React.Fragment key={question.id}>
                <Grid item xs={2} sm={4} md={4}>
                  <QuestionCard
                    question={question}
                    author={users[question.author]}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {questions.filter(answered).map((question) => (
              <React.Fragment key={question.id}>
                <Grid item xs={2} sm={4} md={4}>
                  <QuestionCard
                    question={question}
                    author={users[question.author]}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
