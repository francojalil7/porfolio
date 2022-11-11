import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/header/Texto";
import NavBar from "./components/navbar/NavBar";
import { Text } from "@chakra-ui/react";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Home />
      <Header />

      <Footer />
    </>
  );
}

export default App;
