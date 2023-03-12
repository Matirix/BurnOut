import React, { useState } from "react";
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
    case '/applicationForm':
      text = "Add an Application"
      break;
    default:
      text = "Burn Out"
      break;
    
  }

  
  return (
    <div className="App bg-beige">

          <Header text={text}/>
            <Routes>
              
              {/* <Route path='/login' element={<LoginView handleLogin={handleLogin}/>}></Route> */}
              {/* <Route path='/signup' element={<SignUpView />}></Route> */}
                <Route path="/applicationForm" element={<ApplicationForm/>}></Route>

                <Route path='/' element={<ApplicationsView/>}></Route>

                <Route path="/community" element={<CommunityView />}></Route>

                <Route path='/leaderboard' element={<LeaderboardView />}></Route>
            </Routes>
          <Navbar />

      </div>
  )
}

export default App
