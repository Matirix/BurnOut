import React, { useEffect, useState } from "react";
import ApplicationsView from "./components/ApplicationsView";
import CommunityView from "./components/CommunityView";
import LoginView from "./components/LoginView";
import SignUpView from "./components/SignUpView";
import ApplicationForm from './components/ApplicationForm';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import LeaderboardView from "./components/LeaderboardView";
import * as DataInterface from './components/DataInterface'
import ProfileView from "./components/ProfileView";

function App() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  }

  var text = "Burn Out"
  switch (location.pathname) {
    case '/':
      text = "My Applications"
      break;
    case '/community':
      text = "Community"
      break;
    case '/leaderboard':
      text = "Leaderboard"
      break;
    case '/profile':
      text = "Profile"
    default:
      text = "Burn Out"
      break;
  }

  const RequireAuth = ({ children }) => {
    const userIsLogged = DataInterface.isLoggedIn();//useLoginStatus(); // Your hook to get login status

    if (!userIsLogged) {
       return <LoginView />;
    }
    return children;
 };
  return (
    <div className="App bg-beige">

          <Routes>
            {/* <Route path='/' element={<LoginView/>}></Route> */}
            {/* <Route path='/' element={<ApplicationsView/>}></Route> */}
            {/* <Route path="/login" element={<Login/>}></Route> */}
            {/* <Route path='/settings' element={<Settings />}></Route> */}
            {/* <Route path="/community" element={<CommunityView />}></Route> */}
            {/* <Route path='/leaderboard' element={<LeaderboardView />}></Route> */}
            <Route
              path="/"
              element={
                  <RequireAuth>
                    <Header text={text}/>
                    <ApplicationsView />
                    <Navbar />
                  </RequireAuth>
              }
            />
            <Route
              path="/community"
              element={
                  <RequireAuth>
                                        <Header text={text}/>

                    <CommunityView />
                    <Navbar />

                  </RequireAuth>
              }
            />
            <Route
              path="/leaderboard"
              element={
                  <RequireAuth>
                                        <Header text={text}/>

                    <LeaderboardView />
                    <Navbar />

                  </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                  <RequireAuth>
                                        <Header text={text}/>

                    <ProfileView />
                    <Navbar />

                  </RequireAuth>
              }
            />
            <Route
              path="/applicationform"
              element={
                  <RequireAuth>
                                        <Header text={text}/>

                    <ApplicationForm />
                    <Navbar />

                  </RequireAuth>
              }
            />
            <Route
              path="/login"
              element={
                  // <RequireAuth>
                    <LoginView />
                  // </RequireAuth>
              }
            />
            <Route
              path="/signup"
              element={
                  // <RequireAuth>
                    <SignUpView />
                  // </RequireAuth>
              }
            />

          </Routes>

      </div>
  )
}

export default App
