import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import CodingProjects from "./components/pages/CodingProjects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="grow flex flex-col justify-evenly">
          <Routes>
            <Route path="/react-tailwind-portfolio/" element={<Home />} />
            <Route path="/react-tailwind-portfolio/about" element={<About />} />
            <Route path="/react-tailwind-portfolio/projects" element={<CodingProjects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
