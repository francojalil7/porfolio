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
            <p>HOME</p>
          </a>
          <a href="#skills">HABILIDADES</a>
          <a href="#about_me">
            <p> SOBRE MÍ</p>
          </a>
          <a href="#proyects">
            <p> PROYECTOS</p>
          </a>
          <a href="#contact">
            <p> CONTACTOS</p>
          </a>
        </motion.div>
      )}
    </Box>
  );
};

export default NavBar;
