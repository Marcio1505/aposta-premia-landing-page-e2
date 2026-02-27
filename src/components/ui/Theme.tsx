// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "250px",
    sm1: "310px",
    sm2: "390px",
    md: "490px",
    md1: "768px",
    lg: "960px",
    xl: "1200px",
    xl2: "1536px",
  },
  colors: {
    primary: "#491474",
    secondary: "#2a113d",
    purpleSmoth: "#DFB7FF",
    purpleMedium: "#7520BA",
    greenTeal: "#2EDB89",
    green: "#99f596",
    brand: {
      white: "#fff",
      black: "#000",
      BGInput: "#dbdbdd",
      primary: "#491474",
      purpleSmoth: "#EDE8F1",
      secondary: "#2a113d",
      disabledBg: "#A0A0A0",
    },
  },
  components: {
    Box: {
      variants: {
        Query500px: {
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "md",
          shadow: "md",
          maxWidth: "400px",
          width: "full",
        },
      },
    },

    Divider: {
      variants: {
        solid: {
          borderStyle: "solid",
          borderColor: "gray.400",
          borderRadius: 10,
        },
      },
    },

    Input: {
      variants: {
        filled: {
          field: {
            bg: "brand.BGInput",
            color: "black",
            padding: "1.7rem 0.5rem",
            borderRadius: "12px",
          },
        },
      },
    },

    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        primary: {
          bg: "linear-gradient(0deg, #6BF0C1 0%, #3FCE9D 100%)",
          color: "primary",
          textTransform: "uppercase",
          padding: "1.2rem 2rem",
          fontWeight: "black",
          borderRadius: "8",
          _hover: {
            bg: "#fff12e",
            _disabled: {
              bg: "gray",
            },
          },
          _disabled: {
            bg: "brand.disabledBg",
          },
        },
        secondary: {
          bg: "linear-gradient(90deg, #491474 0%, #8926DA 100%)",
          color: "brand.white",
          padding: "8px 2rem",
          borderRadius: "8px",
          _hover: {
            bg: "brand.primary",
            _disabled: {
              bg: "gray",
            },
          },
          _disabled: {
            bg: "brand.disabledBg",
          },
        },
        white: {
          bg: "brand.white",
          color: "brand.primary",
          padding: "1.5rem 3rem",
          borderRadius: "12",
          _hover: {
            bg: "brand.BGInput",
            _disabled: {
              bg: "gray",
            },
          },
          _disabled: {
            bg: "brand.disabledBg",
          },
        },
        link: {
          color: "brand.primary",
          _hover: {
            color: "#3c0966",
            textDecoration: "none",
          },
          _disabled: {
            color: "brand.disabledBg",
          },
        },
      },
    },
  },
});

export default theme;
