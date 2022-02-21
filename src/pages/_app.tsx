// Packages
import React from "react";

// Types
import { AppProps } from "next/app";

// Stitches Styles
import { globalStyles } from "@/styles/global";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
