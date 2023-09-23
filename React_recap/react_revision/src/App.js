import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Day-2/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
