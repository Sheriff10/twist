import React from "react";

export default function Intro() {
   return (
      <div className="intro">
         <div className="container">
            <div className="row wrapper">
               <div className="col-12 col-lg-6 col-md-6">
                  <h1 className="s1"><b>HI THERE,</b></h1>
                  <h1 className="s2"><b>I'M CRYPTO TWIST WELCOME TO MY PORTAL</b></h1>
                  <div className="doings s3">
                     <span>“Web3”•🏔️🪩Defi Tutor💎🧩 || </span>
                     <span>Crypto Enthusiast ♟️♟️ || </span>
                     <span>Technical Analyst & Degen Trader☣️|</span>
                  </div>
                  <div className="btn-con s3">
                    <a href="#about"><button className="btn btn-cyan" >About Me</button></a>
                    <a href="#social"><button className="btn">Socials</button></a>
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
