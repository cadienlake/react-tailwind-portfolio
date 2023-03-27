import React from "react";
import Portrait2 from ".././../assets/images/portrait2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-[3vw] flex flex-col items-center">
      <div className="m-[3vh]">
        <h2 className="text-center">
          <p>Howdy! My name is Cadien. I'm a musician born and bred in Chicago.</p>
        </h2>
      </div>
      <div className="">
        <img src={Portrait2} className="flex max-h-[50vh] pb-2 rounded-l" alt="Portrait of Cadien in a green argly polo and Scott Fraser Collection Salt & Pepper Wool trousers with a red background." />
      </div>
      <div class="uppercase tracking-wider text-xs sm:text-right mix-blend-overlay">Photo by Tim Nagle</div>

      <p>
        You may have heard of the band I've been in since 2010, <Link to="https://www.twinpeaksdudes.com">Twin Peaks.</Link> I'm currently working on a solo record, and hoping to share it this year.</p>
      <p> I'm also a burgeoning web developer, and will be recieving my certificate in Full Stack Development from Northwestern University in April 2023. Check in on this website for updates!</p>
    </div>
  );
}

export default About;
