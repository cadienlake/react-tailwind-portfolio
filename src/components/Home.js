import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import Portrait from "../assets/images/portrait.jpg";

function Home() {
  return (
    <div>
      <Nav />
      <Contact />
      <div className="hidden px-[5vw] mb-[5vh]  max-w-[80vw] sm:block sm:mb-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:mt-[3vh] -z-10">
        <img src={Portrait} className="max-h-[80vh] pb-2 mix-blend-overlay opacity-100 rounded-3xl" alt="Portrait of Cadien in a Scott Fraser collection Salt & Pepper Wool Suit with a red background." />
        <div class="uppercase tracking-wider text-xs sm:text-right mix-blend-overlay">Photo by Tim Nagle</div>
      </div>
    </div>
  );
}

export default Home;
