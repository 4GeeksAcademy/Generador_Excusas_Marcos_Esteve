/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Array de excusas:
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

//Función para generar una excusa aleatoria:

function generarexcusa() {
  let whoindex = Math.floor(Math.random() * who.length);
  let whorandom = who[whoindex];
  let actionindex = Math.floor(Math.random() * action.length);
  let actionrandom = action[actionindex];
  let whatindex = Math.floor(Math.random() * what.length);
  let whatrandom = what[whatindex];
  let whenindex = Math.floor(Math.random() * when.length);
  let whenrandom = when[whenindex];

  let excusa = [whorandom + actionrandom + whatrandom + whenrandom];
  return excusa;
}

window.onload = function() {
  //write your code here
  let parrafo = document.querySelector("#excuse");
  parrafo.innerHTML = generarexcusa();
  document
    .getElementById("generarexcusa")
    .addEventListener("click", function() {
      parrafo.innerHTML = generarexcusa();
    });
  console.log("Hello Rigo from the console!");
};
