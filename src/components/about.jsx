import React from "react";
import {
   FaUser,
   FaAddressBook,
   FaChess,
   FaGraduationCap,
   FaChartLine,
   FaChartBar,
   FaBitcoin,
} from "react-icons/fa";

export default function About() {
   const abtFunc = (icon, title) => {
      return { icon, title };
   };
   const abtArr = [
      abtFunc(<FaChess />, "Degen Trader"),
      abtFunc(<FaGraduationCap />, "Defi Tutor"),
      abtFunc(<FaChartLine />, "Technical Analyst"),
      abtFunc(<FaChartBar />, "Forex Trader"),
      abtFunc(<FaBitcoin />, "Crypto Trader"),
   ];
   return (
      <div className="about">
         <div className="container">
            <div className="row align-items-center ">
               <div className="col-lg-6 col-12">
                  <div className="abt-con">
                     <div className="wrapper">
                        <div className="abt-img">
                           <img
                              src="twist.png"
                              alt="Twist"
                              className="img-fluid"
                           />
                        </div>
                        <div className="abt-head">
                           <span className="text-bold">About Twist</span>
                        </div>
                        <div className="abt-body">
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ratione at accusantium ipsam accusamus
                              consequuntur provident repellendus dolores ea!
                              Similique fugiat quae sed sint repellat ad
                              cupiditate praesentium, libero nulla temporibus.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-12">
                  <div className="row justify-content-">
                     {abtArr.map((i, index) => (
                        <div className="col-lg-4 p-2 col-6 cc" key={index}>
                           <div className="abt-icon">
                              <i>{i.icon}</i> <br />
                              <span>{i.title}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
