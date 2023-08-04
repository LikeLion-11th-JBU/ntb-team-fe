import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Header from "./Components/Header";
import Home from "./pages/HomePage/Home";
import Board from "./Components/Board";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
