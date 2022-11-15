import { FormControl, Input, InputGroup, Stack } from "@chakra-ui/react";
import "../App.css";

const Contact = () => {
  return (
    <Stack
      border={"2px"}
      borderColor={"white"}
      marginTop="2rem"
      padding={"1rem"}
      maxW={"950px"}
      w="90%"
      direction={"column"}
    >
      <p className="contact">Contacto</p>
      <FormControl display={"flex"} flexDirection="column">
        <InputGroup>
          <Input
            placeholder="Nombre"
            type="text"
            borderColor={"white"}
            border="2px"
            _focusVisible={{ borderColor: "#20f005" }}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <Input
          placeholder="Correo Electrónico"
          type="email"
          borderColor={"white"}
          border="2px"
          _focusVisible={{ borderColor: "#20f005" }}
        />
      </FormControl>
      <FormControl>
        <Input
          placeholder="Mensaje"
          type="textarea"
          borderColor={"white"}
          border="2px"
          _focusVisible={{ borderColor: "#20f005" }}
          p="5rem"
        />
      </FormControl>
    </Stack>
  );
};

export default Contact;
