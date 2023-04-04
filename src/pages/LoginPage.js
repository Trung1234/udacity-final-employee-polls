import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../store/actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("tylermcginnis");
  const [password, setPassword] = useState("abc321");

  if (loggedIn) {
    // const urlParams = new URLSearchParams(window.location.search);
    // const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={"/"} />;
  }
  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9" data-testid="login-heading">
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-4">
        <label class="form-label">
          User name
          </label>
          <input
            value={username}
            onChange={handleUsername}
            type="text"
            name="username"
            id="username"
            data-testid="username"
            class="form-control"
          />
          
        </div>

        <div class="form-outline mb-4">
        <label class="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            name="password"
            id="password"
            data-testid="password"
            class="form-control"
          />
          
        </div>

        <button  class="btn btn-primary btn-block mb-4" type="submit" data-testid="submit">
          Sign in
        </button>
      </form>   
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: authedUser ? true : false,
});

export default connect(mapStateToProps)(Login);
