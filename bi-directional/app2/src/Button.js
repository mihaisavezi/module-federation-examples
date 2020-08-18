import React from "react";
import { store, API } from "app1/depsFromParent";

console.log("DEBUG:WEBPACK parentDeps in child app", { API, store });

const style = {
  background: "#00c",
  color: "#fff",
  padding: 12,
};

const Button = () => <button style={style}>App 2 Button</button>;

export default Button;
