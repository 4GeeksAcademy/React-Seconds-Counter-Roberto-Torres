//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";




/*setInterval(() => {
    if (numeros[5] > 9) {
        numeros[5] = 0
        numeros[4]++
    } if (numeros[4] > 9) {
        numeros[4] = 0
        numeros[3]++
    } if (numeros[3] > 9) {
        numeros[3] = 0
        numeros[2]++
    } if (numeros[2] > 9) {
        numeros[2] = 0
        numeros[1]++
    } if (numeros[1] > 9){
        numeros[1] = 0
        numeros[0]++
    } if(numeros[0] > 9){
        numeros[0]
        numeros[5]++
    }
    ReactDOM.createRoot(document.getElementById('app')).render(<Home counter={numeros[5]} counter2={numeros[4]} counter3={numeros[3]} counter4={numeros[2]} counter5={numeros[1]} counter6={numeros[0]} />);
    numeros[5]++
}, 1000);*/




ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);



