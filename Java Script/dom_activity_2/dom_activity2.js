// select button calculate
const calculateEl = document.querySelector(".btn-rad");
// select result element
const resultEl = document.querySelector(".result");

// event listener
calculateEl.addEventListener("click", function () {
  // receiving the radius value from the user and convert to a number
  const radius = Number(document.querySelector(".input").value);

  if (radius > 0) {
    // if the given radius is greater than 0, we calculate the volume
    const result = (4 / 3) * Math.PI * radius ** 3;
    // displaying the result
    resultEl.textContent = result;
    // if the value is not greater than 0, we display a message
  } else resultEl.textContent = "enter a valid value (>0)";
});
