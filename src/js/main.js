import {} from "./water.js";
import pcLogo from "../img/POST-CLUB-LOGO-WHITE.png";
const footerLogo = document.getElementById("footer-logo-src");
console.log("Hello world");

const testVariable = document.getElementById("test");

testVariable.innerHTML = "Hello world works";
testVariable.hidden = true;

footerLogo.src = pcLogo;
