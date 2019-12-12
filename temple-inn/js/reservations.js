'use strict';

var sessStore = window.sessionStorage;
window.addEventListener('DOMContentLoad', getData());

function getData() {
   let firstName = document.getElementById("fname");
   firstName.innerHTML = sessStore.getItem("firstName");
   
}



function toggleMenuButton() {
   var x = document.getElementById("myLinks");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}

toggleMenuButton();