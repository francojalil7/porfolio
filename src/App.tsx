import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/header/Texto";
import NavBar from "./components/navbar/NavBar";
import Slider from "./components/Slider";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Projects";
import "animate.css";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Home />
      <Header />
      <Proyects />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
