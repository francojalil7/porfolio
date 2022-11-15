import { Stack } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import "../App.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyvopwr");
  const [mensaje, setMensaje] = useState("");
  const [mail, setMail] = useState("");
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if(state.succeeded){
       setMail("");
    setNombre("");
    setMensaje("");
    }
   
  }, [state]);

  if (state.succeeded) {
  }

  const handlerChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.name === "name"
      ? setNombre(event.currentTarget.value)
      : setMail(event.currentTarget.value);
  };

  const handlerChangeTextArea = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setMensaje(event.currentTarget.value);
  };

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
      <p className="pForm">Contacto</p>
      <form onSubmit={handleSubmit} className="contactForm">
        <label htmlFor="name">Nombre</label>
        <input
          className="inputContact"
          id="name"
          type="text"
          name="name"
          placeholder="Nombre"
          value={nombre}
          onChange={handlerChange}
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          className="inputContact"
          id="email"
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          onChange={handlerChange}
          value={mail}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Mensaje..."
          onChange={handlerChangeTextArea}
          value={mensaje}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Stack>
  );
};

export default Contact;
