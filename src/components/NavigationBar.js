import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../store/actions/authedUser";

const NavigationBar = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        to="/"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </Link>
      <Link
        to="/leaderboard"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Leaderboard
      </Link>
      <Link
        to="/new"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        New Poll
      </Link>
      <span
        className="font-medium px-3 py-2 text-slate-700"
        data-testid="user-information"
      >
        User: {authedUserId}
      </span>
      <form class="form-inline">
        <button
          onClick={logout}
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Logout
        </button>
      </form>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(NavigationBar);
