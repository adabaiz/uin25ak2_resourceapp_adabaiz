import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="tabs">
      <Link to="html" className="tab">HTML</Link>
      <Link to="css" className="tab">CSS</Link>
      <Link to="javascript" className="tab">JavaScript</Link>
      <Link to="react" className="tab">React</Link>
      <Link to="headless-cms" className="tab">Sanity and headless CMS</Link>
    </nav>
  );
};

export default Nav;
