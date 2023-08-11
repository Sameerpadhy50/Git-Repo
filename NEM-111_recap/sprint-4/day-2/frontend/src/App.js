import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
