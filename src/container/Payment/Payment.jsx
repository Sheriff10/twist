import React from "react";

export default function Payment({ show, toggle }) {
   return (
      show && (
         <div className="payment text-white position-fixed d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0">
            <div className="wrap bg-dar col-lg-4 p-3 rounded">
               <div className="x mb-5 text-right">
                  <span className="fw-bold fs-4" onClick={toggle}>X</span>
               </div>
               <div className="heading fs-3 fw-bold mb-4 border-1 border-bottom">
                  <span>Total Checkout (140$)</span>
               </div>
               <div className="text-wrap text-gray mb-3">
                  <span>Pay with card</span>
                  <div className="btn-wrap">
                     <button className="btn flutterwave-btn btn-lg btn-warning w-100">
                        Checkout with Flutterwave{" "}
                        <img src="/flutterwave.png" alt="Bitpay" width={30} />
                     </button>
                  </div>
               </div>

               <div className="divider position-relative d-flex justify-content-center">
                  <span className="position-absolute mx-auto bg-kal-lightgrey rounded-circle p-1 px-2  z-2">
                     or
                  </span>
                  <hr className="w-100" />
               </div>

               <div className="text-wrap text-gray my-3">
                  <span>Pay With Crypto </span>
                  <div className="btn-wrap">
                     <button className="btn bitpay-btn btn-lg bg-light w-100">
                        Checkout with{" "}
                        <img src="/bitpay.png" alt="Bitpay" width={50} />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )
   );
}
