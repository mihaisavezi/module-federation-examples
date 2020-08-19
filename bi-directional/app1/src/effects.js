// (1) - Uncomment the below to crash the app
// import { AgendaPageGridActions } from "app2/remoteExports";

// console.log(
//   "DEBUG:WEBPACK child exposes dep to parent app, parent loads dep from child",
//   { AgendaPageGridActions }
// );

export const myEffect = () => console.log("effect fn");
