import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import LoginPage from './views/LoginPage';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login_or_register' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
