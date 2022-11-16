import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { ImCross, ImMenu } from "react-icons/im";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box my="0" mx="auto" maxW={"1200px"} h="8vh" id="home" position={"sticky"}>
      <button
        className="button"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      >
        {isOpen ? <ImCross color="black"/> : <ImMenu color="black"/>}
      </button>
      {isOpen && (
        <motion.div
          className="nav"
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: "0.3",
          }}
        >
          <a href="#home">
            <p>Inicio</p>
          </a>
          <a href="#skills">Habilidades</a>
          <a href="#about_me">
            <p> Sobre mí</p>
          </a>
          <a href="#project">
            <p> Proyectos</p>
          </a>
          <a href="#contact">
            <p> Contacto</p>
          </a>
        </motion.div>
      )}
    </Box>
  );
};

export default NavBar;
