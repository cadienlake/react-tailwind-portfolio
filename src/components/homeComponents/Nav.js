import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="sm:text-biggie uppercase -indent-4 ml-4 px-[5vw] my-[3vh] sm:my-[5vh] leading-tight tracking-wide">
        <ul className="space-y-3">
          {/* Hover condition indents the nav link when hovering */}
          <li className="hover:indent-1 hover:text-blue-700">
            <Link to="/about">About Me</Link>
          </li>
          <li className="hover:indent-1 hover:text-blue-700">
            <Link to="/projects">Coding Projects</Link>
          </li>
          <li className="hover:indent-1 hover:text-blue-700">
            <Link to="https://www.discogs.com/artist/4364774-Cadien-Lake-James">Discography</Link>
          </li>
          {/* Links to nothing. DIsplays the nav link with a cross through and defines as in progress */}
          <li className="flex flex-initial items-center space-x-8">
            <Link to="#" className="line-through decoration-red-500">
              Graphic Design
            </Link>
            <span class="text-sm opacity-60 lowercase">in progress</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
