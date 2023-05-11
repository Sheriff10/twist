import React from "react";
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
   const sFunc = (link, icon, title) => {
      return { link, icon, title };
   };
   const sArr = [
      sFunc("https://twiter.com", <FaTwitter />, "Twitter"),
      sFunc("https://twiter.com", <FaFacebook />, "Facebook"),
      sFunc("https://twiter.com", <FaTelegram />, "Telegram"),
      sFunc("https://twiter.com", <FaWhatsapp />, "Whatsapp"),
   ];
   return (
      <div className="contact">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-12 col-lg-6">
                  <div className="socials">
                     <div className="s-head">
                        <b>
                           <h4>Socials</h4>
                           <small className="text-bold">
                              Let's Connect Together
                           </small>
                        </b>
                     </div>
                  </div>
                  <div className="s-body">
                     <ul>
                        {sArr.map((i, index) => (
                           <a href={i.link} key={index}>
                              <i>{i.icon}</i> {i.title} 
                           </a>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-12 col-lg-6">
                  <div className="c-form">
                     <div className="c-form-head">
                        <h4>Send us an email</h4>
                     </div>
                     <form className="form" action="mailto:youraddr@domain.tld" method="GET">
                        <div className="form-group">
                           <input
                              type="text"
                              placeholder="Subject *"
                              name="subject"
                              className="col-lg-6 col-12"
                              required
                           />
                           <input
                              type="text"
                              placeholder="JohnDoe@xyz.com *"
                              name="email"
                              className="col-lg-6 col-12"
                              required
                           />
                        </div>
                        <div className="form-group">
                           <textarea name="body" id="body" cols="30" rows="3" placeholder="Send a Message *" required />
                        </div>
                        <div className="form-group">
                           <input
                              type="submit"
                              value="Send Email"
                              id="submit"
                              className="btn"
                           />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
