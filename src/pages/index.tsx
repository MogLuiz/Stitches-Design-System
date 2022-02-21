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
    outlined: {
      true: {
        boxShadow: "0 0 2px $$shadowColor",
      },
    },
  },

  compoundVariants: [
    {
      color: "primary",
      outlined: true,
      css: {
        $$shadowColor: "$colors$primary",
        background: "transparent",
      },
    },
    {
      color: "shape",
      outlined: true,
      css: {
        $$shadowColor: "$colors$shape",
        background: "transparent",
      },
    },
  ],

  defaultVariants: {
    color: "primary",
    size: "small",
    radius: "default",
    outlined: true,
  },
});

const Home: React.FC = () => {
  return (
    <Flex css={{ gap: "$16", padding: "$16" }}>
      <Button type="button" color="primary">
        Experts Club
      </Button>
      <Button type="button" color="shape" size="full" radius="full" outlined={false}>
        Experts Club
      </Button>
    </Flex>
  );
};

export default Home;
