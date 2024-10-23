import React from "react";
import "./footer.css";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <section className="contact">
        
        <form action="" className="email">
          <MdEmail className="emailicon" />

          <input type="email" placeholder="Enter your email to subscribe" pointer="text" />
          <button type="submit" className="send">
            {" "}
            Send
          </button>
        </form>
      </section>
      <div className="icons" >

      </div>
    </>
  );
}
