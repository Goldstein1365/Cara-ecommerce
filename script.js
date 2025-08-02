// Script for navigation bar
"use strict";
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const MainImg = document.getElementById("MainImg");
const smalling = document.getElementsByClassName("small-img");
const proDetails = document.getElementsByClassName("pro");
const newEmail = document.querySelector(".form input");
const suscribe = document.querySelector(".form .normal");
const mailWarning = document.querySelector(".warning");
const purchaseButton = document.querySelector("#subtotal .normal")
// Select all product elements on index.html/shop.html

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

suscribe.onclick = () => {
  if (newEmail.value !== "") {
    alert(`${newEmail.value}, you've suscribe to our newsletter`);
  } else {
    mailWarning.innerHTML = "Insert your email";
    setTimeout(() => {
      mailWarning.innerHTML = "";
    }, 2000);
  }
};

purchaseButton.onclick = ()=>{
alert("Your Purchase was succesfully")
}

//   spreadoperator was used to convert it into an array
[...smalling].forEach((small) => {
  small.onclick = () => {
    MainImg.src = small.src;
  };
});

//  Convert HTMLCollection to array and add click event to each product
// When a product is clicked, save its image src to localStorage and redirect to sproduct.html
[...proDetails].forEach((details) => {
  details.onclick = () => {
    const img = details.querySelector("img").src; // Get the product image src
    localStorage.setItem("selectedProductImg", img); // Save to localStorage
    window.location.href = "sproduct.html"; // Redirect to product details page
  };
});

// When sproduct.html loads, set the main image to the one saved in localStorage (if available)
// Also, re-attach click events to thumbnails for image switching
window.onload = function () {
  const MainImg = document.getElementById("MainImg");
  const selectedImg = localStorage.getItem("selectedProductImg");
  if (selectedImg) {
    MainImg.src = selectedImg; // Set main image to the selected product image
  }
  var smalling = document.getElementsByClassName("small-img");
  [...smalling].forEach((small) => {
    small.onclick = () => {
      MainImg.src = small.src;
    };
  });
};
