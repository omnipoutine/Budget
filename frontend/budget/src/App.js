
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import Hidden from './components/Hidden';

function App() {
  return (
    <div className="App">
      
        <LoginButton/>
        <LogoutButton/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Lggedin" element={<Hidden/>}/>
        </Routes>
    </div>
  );
}

export default App;
