import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      border={"2px"}
      borderColor={"white"}
      m="1rem"
      maxW={"1200px"}
      my="0"
      mx="auto"
    >
      <Stack
        direction="row"
        justifyContent={"center"}
        spacing="1"
        p="15px"
        m="5px"
      >
        <a href="https://github.com/francojalil7" target={"_blank"}>
          <FaGithub size={"35px"} />
        </a>

        <a href="https://www.linkedin.com/in/francojalil/" target={"_blank"}>
          <FaLinkedin size={"35px"} />
        </a>
      </Stack>
      <Stack alignItems={"center"}>
        <Text color="white" m="1rem">
          © Hecho por Franco Jalil 2022
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
