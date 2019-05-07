import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dice from "./components/dice";
import "./canvas.css";
import "./dice.css";
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//const element = <h1>Rolling A Dice !</h1>
ReactDOM.render(<Dice />, document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
