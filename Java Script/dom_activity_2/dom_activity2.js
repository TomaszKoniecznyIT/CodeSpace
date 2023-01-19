const calculateEl = document.querySelector(".btn-rad");
const resultEl = document.querySelector(".result");

calculateEl.addEventListener("click", function () {
  const radius = Number(document.querySelector(".input").value);
  if (radius > 0) {
    const result = (4 / 3) * Math.PI * radius ** 3;
    resultEl.textContent = result;
  } else resultEl.textContent = "enter a valid value (>0)";
});
