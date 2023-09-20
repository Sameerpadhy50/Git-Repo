import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { TodoApp } from './Day-2/TodoApp';
import { QuotesApp } from './Day-2/QuotesApp';
import { Login } from './Day-2/Login';
import { Payment } from './Day-2/Payment';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Day-2/Navbar';
import LoadingBoy from './Day-2/LoadingBoy';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      
     
      

      
    </div>
  );
}

export default App;
