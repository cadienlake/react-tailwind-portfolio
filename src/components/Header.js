import { Link, useLocation } from "react-router-dom";
// Import the image we need for this component.
import TapeMachine from "../assets/images/tape-machine.svg";

function Header() {
  // Define the location of the current page so we can use it in the return statement.
  const location = useLocation();
  // Create a variable that will be used to display the current page after my name.
  const currentPage = <div className="flex items-center mt-1 opacity-40"> {location.pathname}</div>;
  return (
    <div className="p-[3vw]">
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={TapeMachine} alt="Tape Machine" className="w-7" />
          </Link>
          <Link to="/">
            <h1 className="lowercase relative top-px">
              Cadien <span className="font-semibold">Lake</span> Jack Henry James
            </h1>
          </Link>
          {/* If we are on the homepage, display nothing, otherwise display the curent page after my name */}
          {location.pathname === "/" ? "" : currentPage}
        </div>
        {/* If we aren't on the home page, display nothing, otherwise display additional info about me */}
        <div className="flex items-center pl-[10vw] opacity-60">{location.pathname !== "/" ? "" : <h1 className="lowercase relative top-px justify-self-end">Songwriter, Producer, Graphic Designer & Web Developer</h1>}</div>
      </div>
    </div>
  );
}

export default Header;
