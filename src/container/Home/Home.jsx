import React from "react";
import About from "../../components/about";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Intro from "../../components/intro";

export default function Home() {
   return (
      <>
         <Header />
         <Intro />
         <About />
         <Contact />
         <Footer />
      </>
   );
}
