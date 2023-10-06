import React from "react";

export default function Footer() {
   return (
      <div className="footer py-3">
         <div className="container">
            <div className="col-12 d-flex justify-content-between">
               <small>
                  Created with 💙 by{" "}
                  <sheezey-text>
                     <a href="https://twitter.com/sheezey_" target="_blank">
                        Sheezey
                     </a>
                  </sheezey-text>{" "}
               </small>
               <div className="text-right">
                  <span>
                     Copyright © 2023{" "}
                     <span className="text-purple fw-bold"> CryptoTwist</span>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
