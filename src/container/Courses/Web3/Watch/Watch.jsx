import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { FaCheckCircle, FaVideo } from "react-icons/fa";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";

export default function Watch() {
   const dum = [1, 2, 3, 4, 5, 56];

   return (
      <div className="watch">
         {/* Header */}
         <Header />
         {/* Intro Section */}
         <div className="container">
            <div className="resume py-5">
               <div className="text-wrap">
                  <span className="fs-1 fw-bold text-white py-2">
                     {" "}
                     The Complete Web3 Course
                  </span>
               </div>

               <div className="row bg-darc p-5">
                  <div className="col-md-6">
                     <div className="img-wrap">
                        <img src="/course_img.webp" alt="Web3" className="" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="text-wrap bg-darc2 d-flex align-items-center justify-content-center h-100">
                        <div className="wrap text-center">
                           <span className="fs-4 fw-bold text-gray">
                              Introduction to Web3
                           </span>{" "}
                           <br />
                           <button className="btn bg-purple px-5 mt-3 fw-bold text-light">
                              Start Lesson
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Courses Video */}
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  <div className="heading bg-darc mb-3 p-3">
                     <span className="fs-4 fw-bold text-white">
                        Web3 Course (8h)
                     </span>{" "}
                     <br />
                     <small className="text-gray">2/10 completed</small>
                  </div>
                  {dum.map((course, index) => (
                     <div
                        className="wrap bg-darc d-flex justify-content-between align-items-center p-3 mb-2"
                        key={index}
                     >
                        <div className="text-wrap d-flex align-items-center gap-4">
                           <FaCheckCircle className="fs-4 text-purple" />{" "}
                           <div className="txt-wrap">
                              <span className="text-gray">
                                 Introduction to Web3
                              </span>{" "}
                              <br />
                              <small className="badge bg-purple">
                                 <FaVideo /> (1:56)
                              </small>
                           </div>
                        </div>
                        <div className="btn-wrap">
                           <button className="btn bg-purple-grad text-light fw-bold text-small">
                              {" "}
                              Start
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="col-md-4">
                  <div className="text-wrap bg-darc p-5 text-center">
                     <span className="fs-4  fw-bold text-light">
                        30% Complete
                     </span>
                     <ProgressBar
                        completed={30}
                        maxCompleted={100}
                        className="mt-2"
                        customLabel=" "
                     />
                  </div>

                  {/* ABOUT */}
                  <div className="wrap bg-darc mt-4 py-3">
                     <div className="container p-lg-4">
                        <div className="heading d-flex mb-3 justify-content-between align-items-center">
                           <img
                              src="/twist.jpeg"
                              alt="twist"
                              width={100}
                              className="rounded-circle"
                           />
                           <span className="fs-4 fw-bold text-white">
                              Crypto Twist
                           </span>
                        </div>
                        <div className="text-wrap text-gray">
                           <span>
                              Twist is a Degen Trader who thrives on the thrill
                              of risk and chaos. As a DeFi tutor, he share his
                              extensive knowledge to guide others through the
                              complexities of decentralized finance. His role as
                              a technical analyst allows him to decipher
                              patterns and extract valuable insights from the
                              crypto market's volatility. <br />
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Footer */}
         <Footer />
      </div>
   );
}
