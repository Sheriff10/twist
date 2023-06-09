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
      abtFunc(<FaBitcoin />, "Crypto Trader"),
   ];
   return (
      <div className="about" id="about">
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
                              Twist is a Degen Trader who thrives on the thrill
                              of risk and chaos. As a DeFi tutor, he share
                              his extensive knowledge to guide others through
                              the complexities of decentralized finance. His
                              role as a technical analyst allows him to
                              decipher patterns and extract valuable insights
                              from the crypto market's volatility. Twist
                              fearlessly navigates the treacherous waters of
                              cryptocurrency trading, capitalizing on
                              opportunities with unwavering confidence. His
                              adventurous spirit and expertise position him as
                              an influential force shaping the future of
                              finance.
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
