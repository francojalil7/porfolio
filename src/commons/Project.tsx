import { Button, chakra, Image, Stack, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../utils/projects";

interface Props {
  name: string;
  description: string;
  img: string;
  stack: string;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

const Proyect = () => {
  return (
    <motion.div
    
    className="animate__backInRight"
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: "1",
      }}
    >
      <Image src={"../assets/broken-office.jpeg"} />

      <Stack>
        <Stack w="50%" m="1rem">
          <Text color="white" fontSize={"2rem"} m="0 auto">
            Broken-Office for Globant
          </Text>
          <Text color="white">
            Aplicación Mobile Firts que permite a los Globers reportar objetos
            rotos en oficinas. Utilizando Geolocalicación y Machine Learing para
            generar tags que den más contexto a dichos reportes.
          </Text>
          <Text color="white" m="0 auto">
            React | Redux | Express | MongoDB | Mongoose | Vision IA
          </Text>
        </Stack>
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
    </motion.div>
  );
};

export default Proyect;
