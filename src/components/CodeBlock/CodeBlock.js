import React from "react";
import "./CodeBlock.css";

function CodeBlock(props) {
  return <pre className="code-block">{props.textContent}</pre>;
}

export default CodeBlock;
