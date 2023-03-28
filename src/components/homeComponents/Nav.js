import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="text-biggie lowercase -indent-4 ml-4 px-[5vw] my-[5vh] leading-tight">
        <ul className="space-y-3">
          <li className="hover:indent-1">
            <Link to="/about">About Me</Link>
          </li>
          <li className="hover:indent-1">
            <Link to="/projects">Coding Projects</Link>
          </li>
          <li className="hover:indent-1">
            <Link to="https://www.discogs.com/artist/4364774-Cadien-Lake-James">Discography</Link>
          </li>
          <li className="flex flex-initial items-center space-x-8">
            <Link to="#" className="line-through decoration-red-500">
              Graphic Design
            </Link>
            <span class="text-sm opacity-40">in progress</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
