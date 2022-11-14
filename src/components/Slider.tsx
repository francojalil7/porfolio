import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import "../App.css";
import skills from "../utils/skills";

const Slider = () => {
  const MotionBox = motion(Box);

  return (
    <>
      <Box id="skills" m="0 auto" maxWidth={"1050px"} h="auto">
        <Text
          bgGradient="linear(to-tr, teal.300, yellow.400)"
          bgClip="text"
          fontSize="3rem"
          m="1rem"
          fontWeight="extrabold"
        >
          Habilidades.
        </Text>
        <Text color="white" m="1rem" fontSize="1.5rem">
          En el 2021 comencé a estudiar tecnologías del Frontend. Comencé con
          HTML5, CSS3 Y JavaScript. <br />
          Actualmente cuando trabajo con React me gusta utilizar TypeScript.
        </Text>
      </Box>
      <Box overflow={"hidden"} maxWidth="1000px" h="auto">
        <MotionBox
          className="slider"
          display="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -200 }}
          h="auto"
        >
          {skills.map(({ name, skill }) => {
            return (
              <motion.div key={skill} className="skill">
                <img src={skill} className="skillImg" />
                <p>{name}</p>
              </motion.div>
            );
          })}
        </MotionBox>
      </Box>
    </>
  );
};

export default Slider;
