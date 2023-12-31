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
document.getElementById("navtag3").addEventListener("click", () => {
  var kontactContainer = document.querySelector(".tickets");
  kontactContainer.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstname = form.firstname;
    let lastname = form.lastname;
    let errorBox = document.getElementById("errorBox");

    // Clear previous error messages
    errorBox.innerHTML = "";

    if (firstname.value.trim() === "") {
      errorBox.classList.add("show");
      errorBox.innerHTML += "Need A Name,  ";
      return false;
    }
    if (lastname.value.trim() === "") {
      errorBox.classList.add("show");
      errorBox.innerHTML += "Need A Lastname,  ";
      return false;
    }

    // If both fields are filled, you can reload the page
    location.reload();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  function updatePrice(price) {
    // Update the price in the top-sale section
    document.getElementById("totalPrice").innerText = price + "$";
  }

  // Add event listeners
  document.getElementById("perPerson").addEventListener("click", function () {
    updatePrice(25);
  });

  document
    .getElementById("forTwoPeople")
    .addEventListener("click", function () {
      updatePrice(40);
    });

  document
    .getElementById("forFourPeople")
    .addEventListener("click", function () {
      updatePrice(60);
    });

  // Check if the function is defined
  if (typeof updatePrice === "undefined") {
    console.error("updatePrice function is not defined.");
  }
});
