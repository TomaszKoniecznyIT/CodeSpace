// under textEl writes an element with id text
const textEl = document.querySelector("#text");
// to this element we add the text class
textEl.classList.add("text");

// under btnEl writes an element with id jsstyle
const btnEl = document.getElementById("jsstyle");
// to this element we add the btn-set class
btnEl.classList.add("btn-set");

// to the text in <p> with the id "text" we add !!!
text.textContent += " !!!";

// to the <div> we add the class div-btn
document.querySelector("div").classList.add("div-btn");

// adding an action to the button
// the action is to change the css for the button
btnEl.addEventListener("click", function () {
  btnEl.classList.toggle("pres-btn");
});
