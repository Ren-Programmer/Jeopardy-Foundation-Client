import { extendTheme, baseTheme } from "@chakra-ui/react";

export default function setTheme() {
  const theme = extendTheme({
    colors: {
      brands: {
        50: "#D0E6FF",
      },
    },
  });
  return theme;
}
