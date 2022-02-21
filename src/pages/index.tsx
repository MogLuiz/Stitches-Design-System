// Packages
import React from "react";

// Stitches Styles
import { styled } from "@/styles";

const Flex = styled("div", {
  display: "flex",
});

const Button = styled("button", {
  border: 0,
  appearance: "none",
  cursor: "pointer",

  transition: "background 0.2s",
  fontWeight: "bold",

  $$shadowColor: "",

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
        color: "#fff",
      },
      shape: {
        backgroundColor: "$shape",
        color: "#fff",
      },
    },
    size: {
      small: {
        padding: "$16 $32",
      },
      full: {
        padding: "$16 $32",
        flex: 1,
      },
    },
    radius: {
      default: {
        borderRadius: "$default",
      },
      full: {
        borderRadius: "$full",
      },
    },
    shadow: {
      true: {
        boxShadow: "0 0 8px $$shadowColor",
      },
    },
  },

  compoundVariants: [
    {
      color: "primary",
      shadow: "true",
      css: {
        $$shadowColor: "$colors$text"
      },
    },
  ],

  defaultVariants: {
    color: "primary",
    size: "small",
    radius: "default",
    shadow: true,
  },
});

const Home: React.FC = () => {
  return (
    <Flex css={{ gap: "$16", padding: "$16" }}>
      <Button type="button" color="primary">
        Experts Club
      </Button>
      <Button type="button" color="shape" size="full" radius="full">
        Experts Club
      </Button>
    </Flex>
  );
};

export default Home;
