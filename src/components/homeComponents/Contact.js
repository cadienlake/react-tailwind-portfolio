import React from "react";
// Import icons we need for this component.
import { Mail, GitHub, Instagram } from "react-feather";

function Contact() {
    return (
        <div className="px-[5vw] mb-[5vh]">
        <h3 class="h3">Contact</h3>
        <div className="flex gap-2 items-center">
          <span>
            {/* Render each icon with hover conditions so a user knows they are hovering and ready to click */}
            <a href="mailto:cadienlake@gmail.com">
              <Mail className="hover:fill-red-500 hover:rotate-12" />
            </a>
          </span>
          <span>
            <a href="https://github.com/cadienlake">
              <GitHub className="hover:fill-red-500 hover:rotate-12" />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/cadienlakejames/">
              <Instagram className="hover:fill-red-500 hover:rotate-12" />
            </a>
          </span>
        </div>
      </div> 
    );
}

export default Contact;