import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/header/Texto";
import NavBar from "./components/navbar/NavBar";
import Slider from "./components/Slider";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Header /> 
      <Proyects />
      <Slider />
      <Home />
      <Footer />
    </>
  );
}

export default App;
