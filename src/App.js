import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Header from "./Components/Header";
import Home from "./pages/HomePage/Home";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Community from "./pages/CommunityPage/Community";
import SearchTalent from "./pages/SearchTalentPage/SearchTalent";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/search-talent" element={<SearchTalent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      
    </div>
    // 라우팅 설정
  );
}

export default App;
