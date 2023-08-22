import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import LandingPage from './components/LandingPage';
import Dashboard from './views/Dashboard';
import UserDashboard from './views/UserDashboard';
import GalaxyChart from './components/GalaxyChart';
import Page404 from './views/Page404';
import AppContext from './libs/context';
import { useState } from "react";


function App() {
  const [loggedUser, setLoggedUser] = useState();
  return (
    <AppContext.Provider value={{ loggedUser, setLoggedUser }}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/404' element={<Page404 />} />
        <Route path='/login_or_register' element={<LoginPage />} />
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/dashboard/:id' element={<UserDashboard/>}/>
        <Route path='/see_history' element={<Dashboard/>}/>
        <Route path='/delete/GalaxyChart' element={<GalaxyChart/>}/>

      </Routes>
    </AppContext.Provider>
  );
}

export default App;
