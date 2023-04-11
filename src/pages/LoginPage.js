import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import employee from "../images/employee_surveys.jpg";
import { handleLogin } from "../store/actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("tylermcginnis");
  const [password, setPassword] = useState("abc321");

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
  }
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    // clear value of input 
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-center h-100">
          <img src={employee} className="photo" alt="employee" id="employee-heading" data-testid="employee-heading"/>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <label className="form-label">User name</label>
          <input
            value={username}
            onChange={handleUsername}
            type="text"
            name="username"
            id="username"
            data-testid="username"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            name="password"
            id="password"
            data-testid="password"
            className="form-control"
          />
        </div>

        <button
          className="btn btn-primary btn-block mb-4"
          type="submit"
          data-testid="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
  loggedIn: authedUser ? true : false,
});

export default connect(mapStateToProps)(Login);
