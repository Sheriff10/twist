import ProgressBar from "@ramonak/react-progress-bar";
import React, { useContext, useEffect, useState } from "react";
import { FaCheckCircle, FaDotCircle, FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";
import userGetHandler from "../../../../utils/getHandler";
import userPostHandler from "../../../../utils/postHandler";

export default function Watch() {
   const dum = [1, 2, 3, 4, 5, 56];

   const [courses, setCourses] = useState([]);
   const [watching, setWatching] = useState("");
   const [completed, setCompleted] = useState(0);

   // verify if user has paid
   const verifyUserPayment = async () => {
      try {
         const response = await toast.promise(
            userGetHandler("/user/verify"),
            {
               pending: "Verifying Access",
               success: "Access Verified",
               error: "Access Denied, Please Purchase course",
            },
            {}
         );
         getCourses();
         return true;
      } catch (error) {
         console.log(error);
         return false;
      }
   };

   useEffect(() => {
      verifyUserPayment();
   }, []);

   const getCourses = async () => {
      try {
         const response = await userGetHandler("/user/course-progress");
         const crs = response.message.courses;
         setCourses(crs);
         calcCompleted(crs);
         const watchId = response.message.watching;
         currentWatching(watchId, crs);
         // console.log(response);
      } catch (error) {
         console.log(error);
      }
   };

   const currentWatching = (watchId, course) => {
      // find the Lecture in the course array
      console.log({ watchId, course });
      const currentLecture = course.find(
         (lecture) => lecture.courseId === watchId
      );
      console.log(currentLecture);
      setWatching(currentLecture.courseName);
   };

   const updateWatching = async (courseId) => {
      try {
         const data = { watching: courseId };
         const response = await userPostHandler("/user/watching", data);
         getCourses();
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };

   const completeCourse = async (courseId) => {
      try {
         const data = { courseId };
         const response = await userPostHandler("/user/complete-course", data);
         getCourses();
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };

   const calcCompleted = (course) => {
      const completedCourse = course.filter(
         (lecture) => lecture.completed === true
      );
      setCompleted(`${completedCourse.length} / ${course.length}`);
   };

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
                              {watching ? watching : "Introduction to Web3"}
                           </span>{" "}
                           <br />
                           <button className="btn bg-purple px-5 mt-3 fw-bold text-light">
                              {watching ? "Start Lesson" : "Resume Lessson"}
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
                     <small className="text-gray">{completed} completed</small>
                  </div>
                  {courses.map((course, index) => (
                     <div
                        className="wrap bg-darc d-flex justify-content-between align-items-center p-3 mb-2"
                        key={index}
                     >
                        <div className="text-wrap d-flex align-items-center gap-4">
                           {course.completed ? (
                              <FaCheckCircle className="fs-4 text-purple" />
                           ) : (
                              <FaDotCircle className="fs-4" />
                           )}

                           <div className="txt-wrap">
                              <span className="text-gray">
                                 {course.courseName}
                              </span>{" "}
                              <br />
                              <small className="badge bg-purple">
                                 <FaVideo /> ({course.videoLength}:00)
                              </small>
                           </div>
                        </div>
                        <div className="btn-wrap">
                           <button
                              className="btn bg-success me-3 text-light fw-bold text-small"
                              onClick={() => completeCourse(course.courseId)}
                           >
                              {" "}
                              Complete
                           </button>

                           <button
                              className="btn bg-purple-grad text-light fw-bold text-small"
                              onClick={() => updateWatching(course.courseId)}
                           >
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
