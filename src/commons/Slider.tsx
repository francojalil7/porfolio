import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import skills from "../utils/skills";
import React from "react";

const Slider: React.FC = () => {
  const MotionBox = motion(Box);

  return (
    <Box overflow={"hidden"} maxWidth="1000px" h="auto" my={"2rem"}>
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
  );
};

export default Slider;
