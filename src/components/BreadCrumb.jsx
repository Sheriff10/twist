import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BreadCrumb({ link }) {
   const navi = useNavigate();
   return (
      <div className="text-white bc bg-darc py-4">
         <div className="container">
            <div className="d-flex justify-content-between align-items-center">
               <div className="icon-wrap cursor-pointer">
                  <span className="fs-3" onClick={() => navi(link)}>
                     {link ? <FaArrowLeft /> : (<span className="text-purple fw-bold fs-5">Dashboard</span>)}
                  </span>
               </div>
               <div className="profile-wrap d-flex gap-4 align-items-center">
                  <div className="text-wrap fs-5 fw-bold">
                     Welcome, <span className="text-purple">CryptoTwist</span>
                  </div>
                  <div className="img-wrap">
                     <img src="/twist.png" alt="CryptoTwist" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
