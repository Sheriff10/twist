import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { Web3InitContext } from "../../context/Web3Init";
import userPostHandler from "../../utils/postHandler";

export default function Payment({ show, toggle }) {
   // const { initWeb3, userAddress } = useContext(Web3InitContext);
   const [loading, setLoading] = useState(false);
   const navi = useNavigate();

   const flutterwavePayment = async () => {
      setLoading(true);
      try {
         const data = { amount: 140 };
         const response = await userPostHandler("/payment/flutterwave", data);
         window.location.href = response;
         console.log(response);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      show && (
         <div className="payment text-white position-fixed d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0">
            {loading && <Loader />}
            <div className="wrap bg-dar col-lg-4 p-3 rounded">
               <div className="x mb-5 text-right">
                  <span className="fw-bold fs-4" onClick={toggle}>
                     X
                  </span>
               </div>
               <div className="heading fs-3 fw-bold mb-4 border-1 border-bottom">
                  <span>Total Checkout (140$)</span>
               </div>
               <div className="text-wrap text-gray mb-3">
                  <span>Pay with card</span>
                  <div className="btn-wrap">
                     <button
                        className="btn flutterwave-btn btn-lg btn-warning w-100"
                        onClick={flutterwavePayment}
                     >
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
                     {!"userAddress" ? (
                        <button
                           className="btn bitpay-btn btn-lg bg-light w-100"
                           onClick={"initWeb3"}
                        >
                           Connect Wallet
                        </button>
                     ) : (
                        <button
                           className="btn bitpay-btn btn-lg bg-light w-100"
                           onClick={() => alert("userAddress")}
                        >
                           Check out{" "}
                           <img
                              src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                              alt="ETH"
                              width={30}
                           />{" "}
                           <span>0.0001ETH</span>
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      )
   );
}
