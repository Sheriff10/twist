import React from "react";

export default function TableController({ th, data }) {
   return (
      <div className="table-responsive bg-dark">
         <table width={"100%"}>
            <thead>
               <tr className="bg-purple">
                  {th.map((header, index) => (
                     <th className="p-3" key={index}>
                        {header}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                     {th.map((header, cellIndex) => (
                        <td key={cellIndex} className="text-white p-3">
                           {row[header]}{" "}
                           {/* Assuming each header corresponds to a property in the data object */}
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
