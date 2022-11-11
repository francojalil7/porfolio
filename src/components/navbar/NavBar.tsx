import { Box, Heading, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import "./styles.css";
import { FaMap } from "react-icons/fa";
import { ImCross, ImMenu } from "react-icons/im";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
  });

  return (
    <Box bg="red" my="0" mx="auto" maxW={"1300px"} h="8vh">
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
        {isOpen ? <ImCross /> : <ImMenu />}
      </button>
      {isOpen && (
        <ChakraBox
        className="nav"
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.2,
          }}
          padding="2"
          bgGradient="linear(to-t, #009428, black)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="30vh"
          height="30vh"
        >
          I'm Dizzy!
        </ChakraBox>
      )}
    </Box>
  );
};

export default NavBar;
