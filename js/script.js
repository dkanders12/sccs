var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 10000);

document.getElementById("contact").addEventListener("click", () => {
  var kontactContainer = document.querySelector(".kontact-container");
  kontactContainer.classList.toggle("active");
});
