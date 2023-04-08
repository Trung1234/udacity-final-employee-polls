import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../store/actions/questions";

const NewPollPage = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    setFirstOption(e.target.value);
  };

  const handleSecondOptionChange = (e) => {
    setSecondOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="font-bold ">New Poll</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-4">
          <label class="form-label">First option</label>
          <input
            value={firstOption}
            onChange={handleFirstOptionChange}
            type="text"
            class="form-control"
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Second option</label>
          <input
            type="text"
            value={secondOption}
            onChange={handleSecondOptionChange}
            class="form-control"
          />
        </div>

        <button
          class="btn btn-primary btn-block mb-4"
          type="submit"
          data-testid="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPollPage);
