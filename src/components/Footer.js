import { useLocation, Link } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <footer id="site-footer" class="opacity-40 text-xs p-[5vw]">
        <div>
          <span>© 2021 Cadien Lake Jack Henry James | </span>
          {/* If we aren't on the home page, link to the home page, otherwise, state All Rights Reserved */}
          {location.pathname !== "/" ? <Link to="/" className="underline">Home</Link> : "All Rights Reserved"}
        </div>
    </footer>
  );
}

export default Footer;
