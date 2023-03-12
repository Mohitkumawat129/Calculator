let btn = document.getElementById("toggle");
let container = document.querySelector(".container");
btn.addEventListener("click", () => {
  container.classList.toggle("style");
});
