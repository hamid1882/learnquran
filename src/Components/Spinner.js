import React from "react";
import loader from "./loader.gif";

const Spinner = () => {
  return (
    <div className="py-2 h-25 bg-dark text-light">
      <img
        src={loader}
        alt="loading"
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />
    </div>
  );
};

export default Spinner;
