import { Route, Routes } from "react-router";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import './assets/css/main.css';
import Gallery from "./containers/Gallery/Gallery";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
