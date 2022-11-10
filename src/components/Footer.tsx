import { Box, Image, Stack, Text } from "@chakra-ui/react";

const iconos = [
  "https://cdn.icon-icons.com/icons2/3186/PNG/512/whatsapp_icon_194157.png",
  "https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360",
  "https://cdn-icons-png.flaticon.com/512/25/25231.png",
];
const Footer = () => {
  return (
    <Box border={"2px"} borderColor={"white"} m="1rem" maxW={"1200px"} my="0" mx="auto">
      <Stack
        direction="row"
        justifyContent={"center"}
        spacing="1"
        p="15px"
        m="5px"
      >
        {iconos.map((icono) => {
          return (
            <div key={icono}>
              <Image
                boxSize="35px"
                bg="white"
                borderRadius={"50%"}
                src={icono}
                alt="icono"
              />
            </div>
          );
        })}
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
