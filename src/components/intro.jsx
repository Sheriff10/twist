import React from "react";

export default function Intro() {
   return (
      <div className="intro">
         <div className="bg-con py-5 px-3">
            <div className="container py-5">
               <div className="row wrapper">
                  <div className="col-12 col-lg-6 col-md-6">
                     <div className="text-wrap">
                        <small className="badge bg-purple">
                           I'm CryptoTwist
                        </small>
                     </div>
                     <h1 className="s1 text-light">
                        <b>Crypto Enthusiast.</b>
                     </h1>
                     <h1 className="s2 text-light">
                        <b>
                           DEFI - No Place Like Home. <br /> Degenerate.
                        </b>
                     </h1>
                     {/* <div className="doings s3">
                     <span>“Web3”•🏔️🪩Defi Tutor💎🧩 || </span>
                     <span>Crypto Enthusiast ♟️♟️ || </span>
                     <span>Technical Analyst & Degen Trader☣️|</span>
                  </div> */}
                     <div className="doings s3 my-3 text-muted">
                        <span>
                           Empower the Future with DEFi and Embrace the Crypto
                           Wave!
                        </span>
                     </div>
                     <div className="btn-con s3">
                        <a href="#about">
                           <button className="btn col-lg-5 btn-cyan text-light">About Me</button>
                        </a>
                        <a href="#social">
                           <button className="btn col-lg-5">Socials</button>
                        </a>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center">
                     <div className="img-con shadow btn s4">
                        <img
                           src="logo-text.png"
                           alt="Twist Portfolio"
                           className="img-fluid"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
