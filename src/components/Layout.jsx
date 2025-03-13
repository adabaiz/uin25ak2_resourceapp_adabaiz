import React from "react";
import Nav from "./Nav"; 
import "./styles.scss";

const layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="content">
        {children}
      </main>
    </>
  );
};

export default layout;