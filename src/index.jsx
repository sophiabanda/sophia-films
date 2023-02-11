import React from "react";
import { render } from "react-dom";

import "./index.scss";

const App = () => {
 return <h1>Hello!</h1>;
};

const container = document.querySelector("#root");
render(<App />, container);

