import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/header/Texto";
import NavBar from "./components/navbar/NavBar";
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <NavBar />

      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
