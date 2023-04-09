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
        <div className="form-outline mb-4">
          <label htmlFor="firstOption"
                           data-testid="firstOptionLabel" 
          className="form-label">First Option</label>
          <input
            id="firstOption"
            data-testid="firstOption"
            value={firstOption}
            onChange={handleFirstOptionChange}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label"
          htmlFor="secondOption"
          data-testid="secondOptionLabel">Second Option</label>
          <input
            type="text"
            id="secondOption"
            data-testid="secondOption"
            value={secondOption}
            onChange={handleSecondOptionChange}
            className="form-control"
          />
        </div>

        <button
          className="btn btn-primary btn-block mb-4"
          type="submit"
          data-testid="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPollPage);
