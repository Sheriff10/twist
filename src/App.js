import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/intro";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import Web3Course from "./container/Courses/Web3/Web3Course";
import Watch from "./container/Courses/Web3/Watch/Watch";
import Signup from "./container/Auth/Signup";
import Login from "./container/Auth/Login";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/web3" element={<Web3Course />} />
            <Route path="/courses/web3/watch" element={<Watch />} />
            <Route path="/member/auth/signup" element={<Signup />} />
            <Route path="/member/auth/login" element={<Login />} />
         </Routes>
      </div>
   );
}

export default App;
