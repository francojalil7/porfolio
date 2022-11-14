import { Box, Text } from "@chakra-ui/react";

import "../App.css";
import Slider from "../commons/Slider";

const Skills = () => {
  return (
    <>
      <Box id="skills" m="0 auto" maxWidth={"1050px"} h="auto">
        <Text
          bgGradient="linear(to-tr, teal.300, yellow.400)"
          bgClip="text"
          fontSize="3rem"
          m="1rem"
          fontWeight="extrabold"
          marginBottom={"2rem"}
        >
          Habilidades.
        </Text>
        <Text color="white" m="1rem" fontSize="1.5rem">
          En el 2021 comencé a estudiar tecnologías del Frontend. Comencé con
          HTML5, CSS3 Y JavaScript. <br />
          Actualmente cuando trabajo con React me gusta utilizar TypeScript.
        </Text>
        <Slider/>
      </Box>
    </>
  );
};

export default Skills;
