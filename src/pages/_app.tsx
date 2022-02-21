// Packages
import React from "react";

// Types
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
