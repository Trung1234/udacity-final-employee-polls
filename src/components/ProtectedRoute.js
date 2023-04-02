import {  Navigate } from "react-router-dom";
import {connect} from "react-redux";

const ProtectedRoute = ({children, loggedIn}) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];

    return loggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`}/>;
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: authedUser?true:false,
});

export default connect(mapStateToProps)(ProtectedRoute);
