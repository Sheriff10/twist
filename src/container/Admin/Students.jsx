import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import StatsBoard from "./components/StatsBoard";
import TableController from "./components/TableController";

export default function Students() {
    const tableHeaders = ["Name", "Age", "Country"];
  
  const tableData = [
    { Name: "John Doe", Age: 25, Country: "USA" },
    { Name: "Jane Smith", Age: 30, Country: "Canada" },
    // Add more data as needed
  ];
   return (
      <div className="students">
         <BreadCrumb link={"/admin/dashboard"} />
         <div className="container">
            <div className="my-5">
               <StatsBoard />
            </div>

            {/* Table section */}
            <TableController th={tableHeaders} data={tableData} />
         </div>

      </div>
   );
}
