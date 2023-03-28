import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <footer id="site-footer" class="opacity-40 text-xs p-[5vw]">
        <div>Updated</div>
        <div>
          <span>© 2021 Cadien Lake Jack Henry James | </span>
          {location.pathname !== "/react-tailwind-portfolio/" ? <Link to="/" className="underline">Home</Link> : "All Rights Reserved"}
        </div>
    </footer>
  );
}

export default Footer;
