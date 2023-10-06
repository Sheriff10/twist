import React from "react";
import { FaBars, FaPhone, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
   const toggleMenu = () => {
      const menuCon = document.querySelector(".menu-con ul");
      menuCon.classList.toggle("show");
   };
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
                        <a href="#">About</a>
                     </li>
                     <li>
                        <a href="#">Say Hi</a>
                     </li>
                     <li>
                        <a href="#">Socials</a>
                     </li>
                     <li>
                        <a href="#">Send a Message</a>
                     </li>
                  </ul>
               </div>
               <div className="btn-wrap">
                  <button className="btn bg-purple px-3 py-2 text-light">
                     Contact <FaPhone />{" "}
                  </button>
                  <div className="btn bg-dark text-light ms-3" onClick={toggleMenu}>
                     <FaBars />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
