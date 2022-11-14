import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/header/Texto";
import NavBar from "./components/navbar/NavBar";
import Slider from "./components/Slider";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Projects";
import "animate.css";
import { Stack } from "@chakra-ui/react";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Stack maxWidth={"1200p"} m="0 auto" alignItems={"center"} overflow="hidden">
        <AboutMe />
        <Header />
        <Proyects />
        <Slider />
        <Contact/>
        <Footer />
      </Stack>
      <Home />
    </>
  );
}

export default App;
