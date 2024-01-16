import React from "react";
import {
   FaEnvelope,
   FaInstagram,
   FaLocationArrow,
   FaPhone,
   FaTelegram,
   FaThinkPeaks,
   FaTwitter,
   FaWhatsapp,
} from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";

export default function Contact() {
   const sFunc = (link, icon, title) => {
      return { link, icon, title };
   };
   const sArr = [
      sFunc("https://twitter.com/cryptotwist1", <FaTwitter />, "Twitter"),
      sFunc("mailto:emmanuelofozobatwist@gmail.com", <FaEnvelope />, "Email"),
      sFunc("https://t.me/TwistDe", <FaTelegram />, "Telegram"),
      sFunc("https://wa.me/2349066127007", <FaWhatsapp />, "Whatsapp"),
      sFunc("https://instagram.com/crypto_twist", <FaInstagram />, "Instagram"),
   ];

   const cFunc = (icon, title, text, linkText, link) => {
      return { icon, title, text, linkText, link };
   };
   const cArr = [
      cFunc(
         <MdChatBubble />,
         "Send me a message",
         "Reach with any questions.",
         "twist@gmail.com",
         "/"
      ),
      cFunc(
         <FaPhone />,
         "Call us",
         "Feel free to call our team.",
         "+234 906 612 7007",
         "/"
      ),
      cFunc(
         <FaLocationArrow />,
         "Visit us",
         "Come check out our office.",
         "Socials below",
         "/"
      ),
   ];
   return (
      <div className="contact px-3" id="social">
         <div className="container">
            <div className="heading text-center pb-5">
               <small className="badge bg-purple">Contact Us</small>
               <h1 className="text-light text-4xl md:text-5xl font-bold">Say Hi</h1>
               <span className="text-muted">
                  I'm always happy to hear from you!
               </span>
            </div>
            <div className="row">
               {cArr.map((card, index) => (
                  <div className="col-lg-4 mb-4 " key={index}>
                  <div className="card h-100">
                     <div className="card-icon d-flex align-items-center px-4 py-4">
                        <span className="c-icon text-purple flex p-3 text-lg">
                           {card.icon}
                        </span>
                     </div>
                     <div className="card-body">
                        <div className="head py-2">
                           <span className="fw-bold fs-5 text-light">
                              {card.title}
                           </span>
                        </div>
                        <div className="text py-2">
                           <span className="text-muted">
                              {card.text}
                           </span>
                        </div>
                        <div className="text py-2">
                           <span className="text-purple  fw-bold">
                              {card.linkText}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               ))}
            </div>
         </div> <br /><br />

         <div className="container py-5">
            <div className="row align-items-center">
               <div className="col-12 col-lg-6">
                  <div className="socials">
                     <div className="s-head">
                        <b>
                           <small className="badge bg-purple">Socials</small> <br />
                           <small className="fs-4 text-light">
                              Let's Connect Together
                           </small>
                        </b>
                     </div>
                  </div>
                  <div className="s-bod">
                     <ul>
                        {sArr.map((i, index) => (
                           <a href={i.link} key={index}>
                             <span className="flex items-center gap-3"> {i.icon} {i.title} </span>
                           </a>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-12 col-lg-6">
                  <div className="c-form">
                     <div className="c-form-head">
                        <h4 className="text-purple fw-bold">Send a Message. Happy you reached out</h4>
                     </div>
                     <form className="form" action="mailto:emmanuelofozobatwist@gmail.com" method="GET">
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
                              className="btn bg-purple"
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
