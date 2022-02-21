// Packages
import React from "react";

// Stitches Styles
import { styled } from "@/styles";

const Flex = styled("div", {
  display: "flex",
});

const Home: React.FC = () => {
  return (
    <Flex css={{ gap: "$16", padding: "$16" }}>
      <button type="button">Experts Club</button>
      <button type="button">Experts Club</button>
    </Flex>
  );
};

export default Home;
