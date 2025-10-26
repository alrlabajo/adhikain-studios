import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Research from "./Screens/Research";
import Organizations from "./Screens/Organizations";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/asong-gubat" element={<Research />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
