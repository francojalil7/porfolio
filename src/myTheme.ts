import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const myTheme = extendTheme({ config });

export default myTheme;

export const myNewTheme = extendTheme({
  colors: {
    primary: "#E0171C", //rojo
    secondary: "#009428", //009428
    third: "#94070A", //bordo
    fourth: "#FF3336", //rojo claro
    otro: "3FE06B", //verde claros
  },
  fonts: {
    heading: `'Heebo', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});
