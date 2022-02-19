import React from "react";

// Creating the context object and passing the default values.

const nightMode = {
  backgroundColor: "black",
  color: "white",
  textDecoration: "none",
  paddingBottom: "10px",
};

const lightMode = {
  backgroundColor: "white",
  color: "black",
  textDecoration: "none",
};

const themeContext = React.createContext({ currentTheme: lightMode });

export default themeContext;
