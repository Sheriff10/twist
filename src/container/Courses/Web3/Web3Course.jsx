import React, { useState } from "react";
import { FaCheck, FaHome, FaLightbulb } from "react-icons/fa";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Payment from "../../Payment/Payment";

export default function Web3Course() {
   const dum = [1, 2, 3, 4, 5, 56, , 66, 6, 6, 66];
   const [showCheckout, setShowCheckout] = useState(false);

   const toggleCheckout = () => {
      setShowCheckout(!showCheckout);
   };
   return (
      <div className="web3-cours">
         <Header />
         <Payment show={showCheckout} toggle={toggleCheckout} />

         {/* Course Intro  */}
         <div className="container py-5">
            <div className="row py-5">
               <div className="col-lg-6 mb-4">
                  <div className="img-wrap">
                     <img src="/course_img.webp" alt="Web3" className="w-100" />
                  </div>
                  <div className="text-wrap">
                     <span className="fs-1 fw-bold text-white">
                        The Ultimate WEB3 Course
                     </span>{" "}
                     <br /> <br />
                     <small className="text-gray fs-5">
                        Everything you need to build full-stack applications
                        with Next.js 13+ (App Router) and TypeScript
                     </small>
                  </div>
                  <div className="btn-wrap mt-4">
                     <button
                        className="btn bg-purple-grad text-gray p-3 fw-bold"
                        onClick={toggleCheckout}
                     >
                        Purchase Course For (150$){" "}
                     </button>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="col-lg-6 rounded p-4 mx-auto bg-purple-grad">
                     <div className="heading fs-4 fw-bold text-white mb-4">
                        <span className="border-bottom border-dark border-4 py-2">
                           Course Overview
                        </span>
                     </div>
                     <div className="list text-gray">
                        <ul className="m-0 p-0">
                           {dum.map((list, index) => (
                              <li
                                 className="d-flex align-items-center lh-4 gap-3 mb-2"
                                 key={index}
                              >
                                 <FaHome className="text-dark" />{" "}
                                 <span>Beginner to Pro</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Summary / advice */}
         <div className="summary container py-3">
            <div className="text-wrap col-lg-6 mx-auto text-center">
               <span className="fs-2 fw-bold text-white">
                  Clear. Concise. Comprehensive.
               </span>{" "}
               <br /> <br />
               <span className="text-gray">
                  Tired of piecing together disconnected tutorials or dealing
                  with rambling, confusing instructors? This course is for you!
                  It's perfectly structured into a series of bite-sized,
                  easy-to-follow videos that cover both theory and practice.
               </span>
            </div>
         </div>

         {/* Course Content */}
         <div className="content py-5">
            <div className="container">
               <div className="heading mb-4">
                  <div className="icon-wrap mb-2">
                     <span className="bg-purple-grad p-2 rounded-circle">
                        <FaLightbulb className="text-warning" />
                     </span>{" "}
                  </div>
                  <div className="text-wrap">
                     <small className="badge bg-purple text-light">
                        Highly practical
                     </small>{" "}
                     <br />
                     <span className="fs-2 text-white fw-bold">
                        What You'll Learn
                     </span>
                  </div>
               </div>
               <div className="list">
                  <ul className="m-0 p-0">
                     {dum.map((list, index) => (
                        <li
                           className="d-flex gap-3 align-items-center text-gray mb-3"
                           key={index}
                        >
                           <FaCheck className="text-success" />{" "}
                           <span>
                              Style Next.js applications with Tailwind or CSS
                              modules
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
}
