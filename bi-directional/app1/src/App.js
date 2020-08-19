import LocalButton from "./Button";
import React from "react";
import { API, store } from "./exports";
// (2) Uncommenting this sequence does NOT crash the application as in (1)
// import { AgendaPageGridActions } from "app2/remoteExports";

// console.log(
//   "DEBUG:WEBPACK child exposes dep to parent app, parent loads dep from child",
//   { AgendaPageGridActions }
// );

console.log("DEBUG:WEBPACK parentDeps in parent app", { API, store });

const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => (
  <div>
    <h1>Bi-Directional</h1>
    <h2>App 1</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
