import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const col = process.env.REACT_APP_COLOR_SCHEME;
const light = `${col}.600`;
const dark = `${col}.300`;

export const Button = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    gameCategory: (props) => ({
      bg: mode(light, dark)(props),
      boxShadow: "md",
    }),
    gameCell: (props) => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: mode(light, dark)(props),
      _hover: {
        transform: "scale(1.04)",
        boxShadow: "md",
        bg: mode(`${col}.200`, `${col}.500`)(props),
      },
      _active: {
        bg: mode(`${col}.300`, `${col}.600`)(props),
      },
    }),
    gameQuestionCompleteCell: (props) => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: mode(light, dark)(props),
      _hover: {
        transform: "scale(1.04)",
        boxShadow: "md",
        bg: mode(`${col}.200`, `${col}.500`)(props),
        color: mode(`${col}.400`, `${col}.100`)(props),
      },
      _active: {
        bg: mode(`${col}.300`, `${col}.600`)(props),
      },
      color: mode(light, dark)(props),
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

export function SetButtonStyles(color: string) {
  const col = color;
  const light = `${col}.600`;
  const dark = `${col}.300`;
  const Button = defineStyleConfig({
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
      gameCategory: (props) => ({
        bg: mode(light, dark)(props),
        boxShadow: "md",
      }),
      gameCell: (props) => ({
        bg: "transparent",
        border: "1px solid",
        borderColor: mode(light, dark)(props),
        _hover: {
          transform: "scale(1.04)",
          boxShadow: "md",
          bg: mode(`${col}.200`, `${col}.500`)(props),
        },
        _active: {
          bg: mode(`${col}.300`, `${col}.600`)(props),
        },
      }),
      gameQuestionCompleteCell: (props) => ({
        bg: "transparent",
        border: "1px solid",
        borderColor: mode(light, dark)(props),
        _hover: {
          transform: "scale(1.04)",
          boxShadow: "md",
          bg: mode(`${col}.200`, `${col}.500`)(props),
          color: mode(`${col}.400`, `${col}.100`)(props),
        },
        _active: {
          bg: mode(`${col}.300`, `${col}.600`)(props),
        },
        color: mode(light, dark)(props),
      }),
    },
    // The default `size` or `variant` values
    defaultProps: {},
  });
  return Button;
}
