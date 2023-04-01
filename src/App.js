import './App.css';
import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import { handleInitialData } from './store/actions/shared';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';

function App({dispatch, loggedIn}) {
  useEffect(() => {
      dispatch(handleInitialData());
  });
  return (
     <div className="container">
     <Routes>
         <Route path="/login" exact element={<LoginPage/>}/>
         <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
         {/* <Route path="/leaderboard" exact element={<PrivateRoute><Leaderboard/></PrivateRoute>}/>
         <Route path="/questions/:id" element={<PrivateRoute><PollPage/></PrivateRoute>}/>
         <Route path="/new" exact element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
         <Route path="/404" exact element={<Error404/>}/> */}
     </Routes>
 </div>
  );
}

const mapStateToProps = ({authedUser}) => ({
  loggedIn: authedUser?true:false,
});

export default connect(mapStateToProps)(App);

