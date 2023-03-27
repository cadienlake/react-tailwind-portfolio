import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TapeMachine from "../assets/images/tape-machine.svg";

function Header() {
  const location = useLocation();
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
          {location.pathname === "/" ? "" : currentPage}
        </div>
        <div className="flex items-center pl-[10vw] opacity-60">{location.pathname !== "/" ? "" : <h1 className="lowercase relative top-px justify-self-end">Songwriter, Producer, Graphic Designer & Web Developer</h1>}</div>
      </div>
      {/* <div className="lowercase">Musician & Web Developer</div> */}
    </div>
  );
}

export default Header;
