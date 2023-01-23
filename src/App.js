import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Greetings from "./Components/Greetings";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
