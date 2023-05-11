import React from "react";

export default function Intro() {
   return (
      <div className="intro">
         <div className="container">
            <div className="row wrapper">
               <div className="col-12 col-lg-6 col-md-6">
                  <h1 className="s1"><b>HI THERE,</b></h1>
                  <h1 className="s2"><b>I'M TWIST WELCOME TO MY PORTAL</b></h1>
                  <div className="doings s3">
                     <span>Degen Trader || </span>
                     <span>Digital Marketer || </span>
                     <span>Social Media Influencer</span>
                  </div>
                  <div className="btn-con s3">
                    <button className="btn btn-cyan">Hire Me</button>
                    <button className="btn">Socials</button>
                  </div>
               </div>
               <div className="col-12 col-lg-6 col-md-6">
                <div className="img-con">
                    <img src="twist.png" alt="Twist Portfolio" className="img-fluid s4" />
                </div>
               </div>
            </div>
         </div>
      </div>
   );
}
