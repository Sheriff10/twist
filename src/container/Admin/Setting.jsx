import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";

export default function Setting() {
   return (
      <div className="login">
         <BreadCrumb link={"/admin/dashboard"} />
         <div className="container my-5">
            <div className="col-lg-5 col-md-6 mx-auto py-5">
               <form className="text-gray bg-darc px-md-5 pb-4">
                  <div className="container">
                     <div className="form-head text-center py-4">
                        <span className="text-light fs-3 fw-bold text-center">
                           Reset Admin Password
                        </span>
                     </div>
                     <div className="form-group mb-4">
                        <span>New Password</span>
                        <input
                           type="text"
                           className="form-control bg-darc2 border-0 py-2"
                        />
                     </div>
                     <div className="form-group mb-4">
                        <span>Confirm new password</span>
                        <input
                           type="password"
                           className="form-control bg-darc2 border-0 py-2"
                        />
                     </div>
                     <div className="form-group mb-4">
                        <span>Old password</span>
                        <input
                           type="password"
                           className="form-control bg-darc2 border-0 py-2"
                        />
                     </div>
                     <div className="btn-wrap">
                        <button className="p-2 btn btn-sm rounded-pill bg-purple w-100 fw-bold text-light">
                           Reset Password
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
