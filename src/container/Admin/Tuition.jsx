import React from "react";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import BreadCrumb from "../../components/BreadCrumb";
import TableController from "./components/TableController";

export default function Tuition() {
   const tableHeaders = ["Name", "Age", "Country"];

   const tableData = [
      { Name: "John Doe", Age: 25, Country: "USA" },
      { Name: "Jane Smith", Age: 30, Country: "Canada" },
      { Name: "Jane Smith", Age: 30, Country: "Canada" },
      { Name: "Jane Smith", Age: 30, Country: "Canada" },
      { Name: "Jane Smith", Age: 30, Country: "Canada" },
      { Name: "Jane Smith", Age: 30, Country: "Canada" },
      { Name: "Jane Smith", Age: 30, Country: "Canada" },
      // Add more data as needed
   ];
   return (
      <div className="tuition">
         <BreadCrumb link={"/admin/dashboard"} />

         <div className="container my-5">
            <div className="row justify-content-around">
               <div className="col-6 col-lg-4">
                  <div className="wrap bg-darc p-3 rounded d-flex flex-wrap align-items-center justify-content-between">
                     <div className="icon-wrap  text-white fs-1">
                        <span className="bg-success rounded-circle p-2 p-lg-3 d-flex text-white">
                           <FaMoneyBillWaveAlt />
                        </span>
                     </div>
                     <div className="text-wrap text-white">
                        <span className="fs-1 fw-bold text-success">$30,000</span> <br />
                        <span>Total Payment</span>
                     </div>
                  </div>
               </div>
               <div className="col-6 col-lg-4">
                  <div className="wrap bg-darc p-3 rounded d-flex flex-wrap align-items-center justify-content-between">
                     <div className="icon-wrap text-white fs-1">
                        <span className="bg-danger rounded-circle p-2 p-lg-3 d-flex text-black">
                           <FaMoneyBillWaveAlt />
                        </span>
                     </div>
                     <div className="text-wrap text-white">
                        <span className="fs-1 fw-bold text-danger">50</span> <br />
                        <span>Payment Canceled</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Table section */}
         <div className="container">
            <TableController th={tableHeaders} data={tableData} />
         </div>
      </div>
   );
}
