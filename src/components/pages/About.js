import React from "react";
import { Link } from "react-router-dom";
// Importing the image we need for this page.
import Portrait2 from ".././../assets/images/portrait2.jpg";

function About() {
  return (
    // This div will be animated when the page loads.
    <div class="animate-enter">
      <h1 class="text-biggie lowercase  text-center">About Me</h1>
      <div className="p-[3vw] flex flex-col items-center">
        <div className="mb-[3vh]">
          <p>Howdy! My name is Cadien. I'm a musician born and bred in Chicago.</p>
        </div>
        <div className="">
          <img src={Portrait2} className="flex max-h-[50vh] pb-2 rounded-l" alt="Portrait of Cadien in a green argly polo and Scott Fraser Collection Salt & Pepper Wool trousers with a red background." />
        </div>
        <div class="uppercase tracking-wider mb-[3vh] text-xs sm:text-right opacity-80">Photo by Tim Nagle</div>

        <p>
          You may have heard of the band I've been in since 2010, <Link to="https://www.twinpeaksdudes.com">Twin Peaks</Link>. I'm currently working on a solo record under the name Lake, and hope to share it this year.
        </p>
        <p> I'm also a burgeoning web developer, and will be recieving my certificate in Full Stack Development from Northwestern University in April 2023. Check in on this website for updates!</p>
      </div>
    </div>
  );
}

export default About;
