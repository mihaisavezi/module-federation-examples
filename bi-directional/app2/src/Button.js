import React from "react";
import { myEffect, API } from "app1/hostExports";

console.log("DEBUG:WEBPACK parentDeps in child app", { API, myEffect });

const style = {
  background: "#00c",
  color: "#fff",
  padding: 12,
};

const Button = () => <button style={style}>App 2 Button</button>;

export default Button;

// app1 loads button from app2
// app1 exposes {store, api} to app2
// app2 button loads {store, api} from app1
