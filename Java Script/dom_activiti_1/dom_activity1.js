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

btnEl.addEventListener("click", function () {
  btnEl.classList.toggle("pres-btn");
});
