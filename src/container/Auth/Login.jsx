import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/footer";
import Loader from "../../components/Loader";
import LogoHeader from "../../components/LogoHeader";
import authHandler from "../../utils/auth";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [loading, setLoading] = useState(false);

   const navi = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const data = { email, password };
         const response = await toast.promise(
            authHandler("/user/signin", data, "login"),
            {
               pending: "Loading",
               success: "",
               error: "An error occured",
            }
         );
         navi("/courses/web3/watch");
         console.log(response);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };
   return (
      <div className="login">
         {loading && <Loader />}
         <LogoHeader />
         <div className="container">
            <div className="col-lg-5 col-md-6 mx-auto py-5">
               <form
                  className="text-gray bg-darc px-3 pb-4"
                  onSubmit={handleSubmit}
               >
                  <div className="container">
                     <div className="form-head text-center py-4">
                        <span className="text-light fs-3 fw-bold text-center">
                           Log In
                        </span>
                     </div>
                     <div className="form-group mb-4">
                        <span>Email</span>
                        <input
                           type="email"
                           className="form-control bg-darc2 text-gray-300 border-0 py-2"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                     </div>
                     <div className="form-group mb-4">
                        <span>Password</span>
                        <input
                           type="password"
                           className="form-control bg-darc2 text-gray-300 border-0 py-2"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                        />
                     </div>
                     <div className="btn-wrap">
                        <button className="p-2 btn btn-lg rounded-pill bg-purple w-100 fw-bold text-light">
                           Log In
                        </button>
                     </div>
                     <div className="caption my-3">
                        <span>
                           Don't have an account?{" "}
                           <Link
                              to={"/member/auth/signup"}
                              className="text-purple"
                           >
                              Signup
                           </Link>
                        </span>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
