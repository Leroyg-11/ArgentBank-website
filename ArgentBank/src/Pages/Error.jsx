import React from "react";
import Triangle from "../assets/triangle-exclamation-solid.svg";

const Error = () => {
  return (
    <div className="error">
      <img src={Triangle} alt="STOP" width="200px" />
      <h1>404</h1>
      <p>Page not found</p>

      <a href="/">Go back to home page</a>
      <br />
      <br />
    </div>
  );
};

export default Error;
