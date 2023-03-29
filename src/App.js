import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import CodingProjects from "./components/pages/CodingProjects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // Define the basename so that the app will work on GitHub Pages.
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="grow flex flex-col justify-evenly">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<CodingProjects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
