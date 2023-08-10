import "./App.scss";
import {Routes, Route} from 'react-router-dom'
import Header from "./Components/Header";
import Home from "./pages/HomePage/Home";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Community from "./pages/CommunityPage/Community";
import SearchTalent from "./pages/SearchTalentPage/SearchTalent";
import MyPage from "./pages/MyPage/MyPage";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/search-talent" element={<SearchTalent />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
    // 라우팅 설정
  );
}

export default App;
