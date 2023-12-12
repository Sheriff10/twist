import React from "react";
import { FaFire } from "react-icons/fa";

export default function StatsBoard() {
   const dum = [1, 2, 3];

   return (
      <div className="stats-board rounded bg-darc p-4">
         <div className="row">
            {dum.map((i, index) => (
               <div className="col-lg-4 col-6 mb-3" key={index}>
                  <div className="wrap text-center">
                     <div className="icon-wrap fs-2 text-purple">
                        <FaFire />
                     </div>
                     <div className="text-wrap text-white">
                        <span className="fw-bold fs-4">21</span> <br />
                        <small>Total Student </small>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
