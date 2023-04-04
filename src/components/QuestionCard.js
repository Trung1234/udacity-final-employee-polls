import { connect } from "react-redux";
import { Link } from "react-router-dom";

const QuestionCard = ({ question, author }) => {
  return (
    <Link to={"questions/" + question.id}>
      <div class="card">
        <div class="card-body">
          <div>
            <div className="text-xl font-medium text-black">
              {question.author}
            </div>
            <p className="text-xs italic">
              {new Date(question.timestamp).toDateString()}
            </p>
            <p className="underline underline-offset-4">Show</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default connect()(QuestionCard);
