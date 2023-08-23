import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { TodoApp } from './Day-2/TodoApp';
import { QuotesApp } from './Day-2/QuotesApp';

function App() {
  return (
    <div className="App">
      {/* <TodoApp/> */}
      {/* <TodoApp/> */}
      <QuotesApp/>
    </div>
  );
}

export default App;
