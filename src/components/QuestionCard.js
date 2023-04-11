import { connect } from "react-redux";
import { Link } from "react-router-dom";

const QuestionCard = ({ question ,author}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
        <img className="avatar" src={author?.avatarURL} alt="Author" />
          <div className="text-xl font-medium text-black">
            {question.author}
          </div>
          <p className="text-xs italic">
            {new Date(question.timestamp).toDateString()}
          </p>
          <Link to={"questions/" + question.id}>
            <button type="button" className="btn btn-success  btn-block">
              Show
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect()(QuestionCard);
