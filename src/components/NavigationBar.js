import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../store/actions/authedUser";

const NavigationBar = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid row">
        <div className="col-10">
          {authedUserId && (
            <label id="user-information">User: {authedUserId}</label>
          )}
          {!authedUserId ? (
            <Link
              to="/"
              onClick={(e) => e.preventDefault()}
              className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Home
            </Link>
          ) : (
            <Link
              to="/"
              className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Home
            </Link>
          )}
          {!authedUserId ? (
            <Link
              to="/leaderboard"
              onClick={(e) => e.preventDefault()}
              className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Leaderboard
            </Link>
          ) : (
            <Link
              to="/leaderboard"
              className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Leaderboard
            </Link>
          )}
          {!authedUserId ? (
            <Link
              to="/add"
              onClick={(e) => e.preventDefault()}
              className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              New Poll
            </Link>
          ) : (
            <Link
              to="/add"
              className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              New Poll
            </Link>
          )}
        </div>
      </div>
      <div className="collapse navbar-collapse col-2" id="navbarSupportedContent">
        <form className="d-flex float-right">
          <button onClick={logout} className="btn btn-outline-success">
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser ? authedUser.id : null,
});

export default connect(mapStateToProps)(NavigationBar);
