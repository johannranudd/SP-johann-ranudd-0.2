
// dropdown section function
const dropBtn = document.querySelector("#dropBtn");
const hiddenSection = document.querySelector(".hidden-section");

dropBtn.addEventListener("click", function () {
  hiddenSection.classList.toggle("show-section");
});

// close dropdown section function
const closeBtn = document.querySelector("#closeBtn");

closeBtn.addEventListener("click", function () {
  hiddenSection.classList.toggle("show-section");
});