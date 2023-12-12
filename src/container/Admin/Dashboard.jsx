import React from "react";
import { FaCog, FaDropbox, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import LogoHeader from "../../components/LogoHeader";

export default function Dashboard() {
   const navi = useNavigate();
   const cardFunc = (title, link, icon) => {
      return { title, link, icon };
   };
   const cardArr = [
      cardFunc("Students", "/admin/dashboard/students", <FaUsers />),
      cardFunc("Payments", "/admin/dashboard/tuition", <FaDropbox />),
      cardFunc("Settings", "/admin/dashboard/setting", <FaCog />),
   ];
   return (
      <>
         <BreadCrumb />
         <div className="container admin-dashboard">
            <div className="row">
               {cardArr.map((i, index) => (
                  <div
                     className="col-lg-4 cursor-pointer"
                     key={index}
                     onClick={() => navi(i.link)}
                  >
                     <div className="card p-5 bg-darc">
                        <div className="text-wrap fs-3 text-center d-flex gap-3 align-items-center justify-content-center text-purple">
                           <span>{i.title}</span>
                           {i.icon}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
