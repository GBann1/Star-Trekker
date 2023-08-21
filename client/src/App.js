import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './views/LoginPage';
import LandingPage from './components/LandingPage';
import Dashboard from './views/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login_or_register' element={<LoginPage/>}/>
        {/* <Route path='/dashboard/:id' element={<UserDashboard/>}/> */}
        <Route path='/dashboard/' element={<UserDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
