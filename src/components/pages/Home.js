import React from "react";
// Importing components and images we need for this page.
import Nav from "../homeComponents/Nav";
import Contact from "../homeComponents/Contact";
import Portrait from "../../assets/images/portrait.jpg";
import BookShare from "../../assets/images/bookShare.gif";

function Home() {
  return (
    // This div will be animated when the page loads.
    <div className="animate-enter">
      <Nav />
      <Contact />
      {/* Until hitting the sm breakpoint, this image and caption will be hidden */}
      <div className=" px-[5vw] mb-[3vh]  max-w-[80vw] sm:block ml-[10vw] sm:mb-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:mt-[3vh] -z-10">
        <img src={Portrait} className="max-h-[80vh] pb-2opacity-100 rounded-3xl" alt="Portrait of Cadien in a Scott Fraser collection Salt & Pepper Wool Suit with a red background." />
        <img src={BookShare} className="max-h-[80vh] pb-2opacity-100 rounded-3xl" alt="BookShare" />
        <div class="uppercase tracking-wider text-xs text-center sm:text-right">Photo by Tim Nagle</div>
      </div>
    </div>
  );
}

export default Home;
