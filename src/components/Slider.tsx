import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import "../App.css";
import skills from "../utils/images";

const Slider = () => {
  const MotionBox = motion(Box);

  return (
    <Box
    id="skills"
      m="0 auto"
      overflowX="hidden"
      maxWidth={"1050px"}
      h="auto"
      borderColor={"red"}
    >
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
        En el 2021 comencé a estudiar tecnologías del Frontend. Comencé con HTML5, CSS3 Y JavaScript.
      </Text>

      <Text color="white" m="1rem" fontSize="1.5rem">
        Actualmente cuando trabajo con React me gusta utilizar TypeScript.
      </Text>
      <MotionBox
        display="flex"
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -750 }}
      >
        {skills.map((skill) => {
          return (
            <motion.img
              key={skill}
              src={skill}
              className="skill"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
            />
          );
        })}
      </MotionBox>
    </Box>
  );
};

export default Slider;
