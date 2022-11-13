import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Box
      id="about_me"
      m="0 auto"
      overflowX="hidden"
      maxWidth={"1050px"}
      h="auto"
      borderColor={"red"}
    >
      <Stack maxWidth={"400px"} m="1rem">
        <Text
          bgGradient="linear(to-tr, teal.300, yellow.400)"
          bgClip="text"
          fontSize="3rem"
          m="1rem"
          fontWeight="extrabold"
        >
          Sobre mí.
        </Text>
        <Text color="white" m="1.3rem" fontSize="1.6rem">
          Hola! Soy Franco, FullStack Developer actualmente orientado al
          Frontend.
        </Text>
        <Text color="white" m="1rem" fontSize="1rem">
          Comencé a estudiar programación en 2020, en 2021 decidí arrancar una
          formación más formal en Instituto ORT en la carrera de Analista de
          Sistemas.
        </Text>
        <Text color="white" m="1rem" fontSize="1rem">
          Finalmente este año para mejorar mi empleabilidad decidí realizar un
          Coding Bootcamp de más de 800hs donde me formé tanto en la parte
          técnica así también como mis habilidades blandas.
        </Text>
        <Stack
          direction={"row"}
          m="1rem"
          justifyContent={"center"}
          alignItems="center"
        >
          <a href="https://drive.google.com/file/d/1I80vpy7QR3BA3ab6GdB9-FQzunfwibBV/view?usp=sharing" target={"_blank"}><Button borderRadius={"20px"} m="0">
            Descargar CV
          </Button></a>
          
          <a href="https://www.linkedin.com/in/francojalil/" target={"_blank"}>
            <FaLinkedin size="30px" />
          </a>

          <a href="https://github.com/francojalil7" target={"_blank"}>
            <FaGithub size="30px" />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AboutMe;
