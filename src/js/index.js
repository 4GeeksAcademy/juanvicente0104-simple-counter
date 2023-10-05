//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//Initialize our counter variable
let counter = 0

setInterval(() => {
    let first = Math.floor((counter/1) % 10)
    let second = Math.floor((counter/10) % 10)  
    let third = Math.floor((counter/100) % 10)      
    let fourth = Math.floor((counter/1000) % 10)  
    let fifth = Math.floor((counter/10000) % 10)  
    counter = counter + 1

    //render your react application
    ReactDOM.render(
    <Home num1={first} num2={second} num3={third} num4={fourth} num5={fifth}/>, document.querySelector("#app"));
    

},1000)
