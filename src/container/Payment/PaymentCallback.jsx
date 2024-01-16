import React, { useEffect } from "react";
import extractQueries from "../../utils/extractQueries";
import userGetHandler from "../../utils/getHandler";

export default function PaymentCallback() {
   useEffect(() => {
      verifyCallback();
   }, []);

   
   const verifyCallback = async () => {
      const queries = extractQueries(window.location.href);

      try {
         if (queries.status) {
            const response = await userGetHandler(
               `/payment/callback?status=${queries.status}&tx_ref=${queries.tx_ref}&transaction_id=${queries.transaction_id}`
            );
            console.log(response);
         }
      } catch (error) {
         console.log(error);
      }
   };
   return <div>PaymentCallback</div>;
}
