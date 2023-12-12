import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import Web3Course from "./container/Courses/Web3/Web3Course";
import Watch from "./container/Courses/Web3/Watch/Watch";
import Signup from "./container/Auth/Signup";
import Login from "./container/Auth/Login";
import Dashboard from "./container/Admin/Dashboard";
import Students from "./container/Admin/Students";
import Tuition from "./container/Admin/Tuition";
import Setting from "./container/Admin/Setting";
import AdminLogin from "./container/Admin/AdminAuth/Login";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/web3" element={<Web3Course />} />
            <Route path="/courses/web3/watch" element={<Watch />} />
            <Route path="/member/auth/signup" element={<Signup />} />
            <Route path="/member/auth/login" element={<Login />} />

            {/* Admin */}
            <Route path="/admin/auth" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/dashboard/students" element={<Students />} />
            <Route path="/admin/dashboard/tuition" element={<Tuition />} />
            <Route path="/admin/dashboard/setting" element={<Setting />} />
         </Routes>
      </div>
   );
}

export default App;
