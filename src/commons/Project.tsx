import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Proyecto } from "../interfaces/proyecto";
import projects from "../utils/projects";

interface Prop {
  project: Proyecto;
}

const Project = ({ project }: Prop) => {
  return (
    <motion.div
      className="animate__backInRight"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: "1",
      }}
    >
      <Stack m="1rem" direction={{ base: "column-reverse", xl: "row" }}>
        <Box bg="red" w={{ base: "100%", xl: "50%" }}>
          Imagen Proyecto
        </Box>
        <Stack
          w={{ base: "100%", xl: "50%" }}
          direction={"column"}
          alignItems="center"
          m="1rem"
          p="1rem"
        >
          <Text color="white" fontSize={"2rem"} m="0 auto">
            {project.name}
          </Text>
          <Text color="white">{project.description}</Text>
          <Text color="white" m="0 auto">
            {project.stack}
          </Text>
          <Stack direction={"row"} m="0 auto">
            <a href="https://broken-office.netlify.app/" target={"_blank"}>
              <Button>Ver Proyecto</Button>
            </a>
            <a
              href="https://github.com/milagrosdoldan/Broken-Office"
              target={"_blank"}
            >
              <FaGithub color="white" size={"35px"} />
            </a>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default Project;
