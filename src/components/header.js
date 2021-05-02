import React from "react";
import "./header.css"

function Header (props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default Header;