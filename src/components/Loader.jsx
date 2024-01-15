import React from "react";
import { SyncLoader } from "react-spinners";

export default function Loader() {
   return (
      <div className="wrap absolute  top-0 bottom-0 left-0 right-0 flex items-center justify-center backdrop-blur-md z-10 w-full">
         <div className="wrap text-white">

            <SyncLoader className="text-white" color="#fff" size={30} />
         </div>
      </div>
   );
}
