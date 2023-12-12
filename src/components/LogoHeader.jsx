import React from "react";
import { Link } from "react-router-dom";

export default function LogoHeader() {
   return (
      <div className="header bg-darc py-3 text-center">
         <Link to={"/"}>
            <img src="/logo.png" alt="CryptoTwist" width={50} />
         </Link>
      </div>
   );
}
