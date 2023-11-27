import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Signup() {
   return (
      <div className="signup">
         <div className="header bg-darc py-3 text-center">
            <img src="/logo.png" alt="CryptoTwist" width={50} />
         </div>
         <div className="container">
            <div className="col-lg-5 col-md-6 mx-auto py-5">
               <form className="text-gray bg-darc px-md-5 pb-4">
                  <div className="container">
                     <div className="form-head text-center py-4">
                        <span className="text-light fs-3 fw-bold text-center">
                           Sign Up
                        </span>
                     </div>
                     <div className="form-group mb-4">
                        <span>Full Name</span>
                        <input
                           type="text"
                           className="form-control bg-darc2 border-0 py-2"
                        />
                     </div>
                     <div className="form-group mb-4">
                        <span>Email</span>
                        <input
                           type="text"
                           className="form-control bg-darc2 border-0 py-2"
                        />
                     </div>
                     <div className="form-group mb-4">
                        <span>Password</span>
                        <input
                           type="password"
                           className="form-control bg-darc2 border-0 py-2"
                        />
                     </div>
                     <div className="btn-wrap">
                        <button className="p-2 btn btn-lg rounded-pill bg-purple w-100 fw-bold text-light">
                           Sign Up
                        </button>
                     </div>
                     <div className="caption my-3">
                        <span>
                           Already have an account?
                           <Link
                              to={"/member/auth/login"}
                              className="text-purple"
                           >
                              {" "}
                              Log In
                           </Link>
                        </span>
                     </div>
                  </div>
               </form>
            </div>
         </div>

         <Footer />
      </div>
   );
}
