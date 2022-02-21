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
});

const Home: React.FC = () => {
  return (
    <Flex css={{ gap: "$16", padding: "$16" }}>
      <Button type="button" color="primary">
        Experts Club
      </Button>
      <Button type="button" color="shape" size="full">
        Experts Club
      </Button>
    </Flex>
  );
};

export default Home;
