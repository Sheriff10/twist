import React from "react";
import { FaBars, FaPhone, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../utils/getHandler";

export default function Header() {
   const toggleMenu = () => {
      const menuCon = document.querySelector(".menu-con ul");
      menuCon.classList.toggle("show");
   };
   const navi = useNavigate();
   const token = getToken();
   return (
      <div className="header">
         <div className="container">
            <div className="d-flex justify-content-between align-items-center">
               <div className="logo-con">
                  <img
                     src="/logo-text.png"
                     alt="CryptoTwist"
                     className=" w-[150px] lg:w-[250px] "
                  />
               </div>
               <div className="menu-con">
                  <ul className="list-unstyled text-light fw-bold d-flex gap-5 m-0">
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/#about">About</Link>
                     </li>
                     <li>
                        <Link to="/#contact">Contact</Link>
                     </li>
                     <li className="position-relative">
                        <Link to="/courses/web3">
                           Course{" "}
                           <small className="badge bg-purple new rounded-pill position-absolute top-0 start-100">
                              new
                           </small>
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="btn-wrap">
                  <button
                     className="btn text-sm lg: text-lg bg-purple px-3 py-2 text-light fw-bold"
                     onClick={() =>
                        token
                           ? navi("/courses/web3/watch")
                           : navi("/member/auth/signup")
                     }
                  >
                     {token ? "Dashboard" : "Student Registration"}
                  </button>
                  <div
                     className="btn bg-dark text-light ms-3"
                     onClick={toggleMenu}
                  >
                     <FaBars />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
