//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SimpleCounter from "./component/SimpleCounter.jsx";

// include your styles into the webpack bundle
//import "../styles/index.css";

//import your own componentssx



//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
