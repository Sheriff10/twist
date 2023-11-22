import React from "react";
import { FaBars, FaPhone, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
   const toggleMenu = () => {
      const menuCon = document.querySelector(".menu-con ul");
      menuCon.classList.toggle("show");
   };
   const navi = useNavigate();
   return (
      <div className="header">
         <div className="container">
            <div className="d-flex justify-content-between align-items-center">
               <div className="logo-con">
                  <img src="/logo-text.png" alt="CryptoTwist" width={200} />
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
                     className="btn bg-purple px-3 py-2 text-light fw-bold"
                     onClick={() => navi("/member/auth/signup")}
                  >
                     Become a Student
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
