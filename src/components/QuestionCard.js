import { connect } from "react-redux";
import { Link } from "react-router-dom";

const QuestionCard = ({ question, author }) => {
  return (
    <div class="card">
      <div class="card-body">
        <div>
          <div className="text-xl font-medium text-black">
            {question.author}
          </div>
          <p className="text-xs italic">
            {new Date(question.timestamp).toDateString()}
          </p>
          <Link to={"questions/" + question.id}>
            <button type="button" class="btn btn-success  btn-block">
              Show
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect()(QuestionCard);
