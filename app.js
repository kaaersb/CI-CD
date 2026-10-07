const countEl = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const themeBtn = document.getElementById("themeBtn");

let count = 0;

clickBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});