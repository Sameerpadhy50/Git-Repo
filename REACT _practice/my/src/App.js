import logo from './logo.svg';
import './App.css';
import Todo from "./Components/Todo";
import { Heading } from '@chakra-ui/react'


function App() {
  return (
    <div className="App">
      <Heading as="h1" size='3xl' color="green" bg="grey">I'm a Heading</Heading>
    </div>
  );
}

export default App;
