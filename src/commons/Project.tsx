import { Button, Image, Stack, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import projects from "../utils/projects"
interface Props {
  name: string;
  description: string;
  img: string;
  stack: string;
}

const Proyect = () => {
  return (
    <Stack>
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
            <Button >Ver Proyecto</Button>
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
  );
};

export default Proyect;
