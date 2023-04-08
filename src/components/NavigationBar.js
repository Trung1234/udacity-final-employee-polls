import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../store/actions/authedUser";

const NavigationBar = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid row">
        <div class="col-10">
          <label >User: {authedUserId}</label>
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
        </div>
       
        
      </div>
      <div class="collapse navbar-collapse col-2" id="navbarSupportedContent">
          <form class="d-flex float-right">
            <button onClick={logout} className="btn btn-outline-success">
              Logout
            </button>
          </form>
        </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(NavigationBar);
