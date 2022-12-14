import { Stack, Text } from "@chakra-ui/react";
import Proyect from "../commons/Project";
import projects from "../utils/projects";

const Proyects = () => {
  return (
    <Stack maxWidth={"1050px"} m="0 auto" id="project">
      <>
        <Text
          bgGradient="linear(to-tr, teal.300, yellow.400)"
          bgClip="text"
          fontSize="3rem"
          m="1rem"
          fontWeight="extrabold"
        >
          Mis Proyectos.
        </Text>

        <Text color="white" paddingLeft="1rem" fontSize="1.5rem">
          En esta sección encontrarás todos los proyectos en los que trabajé.
        </Text>
        {projects.map((project) => (
          <Proyect key={project.name} project={project} />
        ))}
      </>
    </Stack>
  );
};

export default Proyects;
