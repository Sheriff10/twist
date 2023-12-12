import React from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoHeader from "../../../components/LogoHeader";

export default function AdminLogin() {
   return (
      <div className="login">
         <LogoHeader />
         <div className="container">
            <div className="col-lg-5 col-md-6 mx-auto py-5">
               <form className="text-gray bg-darc px-md-5 pb-4">
                  <div className="container">
                     <div className="form-head text-center py-4">
                        <span className="text-light fs-3 fw-bold text-center">
                           Log In to Admin Dashboard
                        </span>
                     </div>
                     <div className="form-group mb-4">
                        <span>Password</span>
                        <input
                           type="password"
                           className="form-control bg-darc2 border-0 py-2"
                        />
                     </div>
                     <div className="btn-wrap">
                        <button className="p-2 btn btn-sm rounded-pill bg-purple w-100 fw-bold text-light">
                           Log In <FaLock />
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
