let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let btn = document.getElementById("btn");
celsius.addEventListener("input", () => {
  let celValue = parseFloat(celsius.value);

  let f = (celValue * 9) / 5 + 32;
  fahrenheit.value = f;
  let k = celValue + 273;
  kelvin.value = k;
  btn.style.display = "block";
});

fahrenheit.addEventListener("input", () => {
  let faValue = fahrenheit.value;
  let cel = ((faValue - 32) * 5) / 9;
  celsius.value = cel.toFixed(2);

  let kel = ((faValue - 32) * 5) / 9 + 273.15;
  kelvin.value = kel.toFixed(2);
  btn.style.display = "block";
});

kelvin.addEventListener("input", () => {
  let kelValue = kelvin.value;
  let cel = kelValue - 273.15;
  celsius.value = cel;

  let fah = ((kelValue - 273) * 9) / 5 + 32;
  fahrenheit.value = fah;
  btn.style.display = "block";
});

btn.addEventListener("click", () => {
  kelvin.value = "";
  celsius.value = "";
  fahrenheit.value = "";
  btn.style.display = "none";
});
