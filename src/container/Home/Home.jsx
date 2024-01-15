import React, { useContext } from "react";
import About from "../../components/about";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Intro from "../../components/intro";
import { Web3InitContext } from "../../context/Web3Init";

export default function Home() {
   // const { contract, userAddress } = useContext(Web3InitContext);
   return (
      <>
         {/* <button onClick={() => alert(userAddress)}>User Address</button> */}
         <Header />
         <Intro />
         <About />
         <Contact />
         <Footer />
      </>
   );
}
