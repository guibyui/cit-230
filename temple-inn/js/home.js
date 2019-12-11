'use strict';


function toggleMenuButton() {
   var x = document.getElementById("myLinks");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}

toggleMenuButton();



function page(pg){
   sessionStorage.firstName = document.getElementById("first-name").value;
      
   window.location.assign("thank-you.html");
}

function initiate() {
   document.getElementById("submition").addEventListener("click", function(){
   page("thank-you.html");
   });
}

// document.getElementById("storage").innerHTML = sessionStorage.firstName;

window.addEventListener("load", initiate);


// function store() {
// var firstName = document.getElementById("first-name");
// var lastName = document.getElementById('last-name');
// var email = document.getElementById('email');
// var phone = document.getElementById('phone');
// var country = document.getElementById('country');
// var location = document.getElementById('location');
// var checkIn = document.getElementById('check-in-date');
// var checkOut = document.getElementById('check-out-date');
// var guests = document.getElementById('numberOfGuests');
// var yesMeals = document.getElementById('yesMeals');
// var noMeals = document.getElementById('noMeals');
// var balcony = document.getElementById('balcony');

// Store the Values
// sessStore.setItem("first-name", firstName);
// sessStore.setItem("last-name", lastName);
// sessStore.setItem("email", email);
// sessStore.setItem("phone", phone);
// sessStore.setItem("country", country);
// sessStore.setItem("location", location);
// sessStore.setItem("check-in-date", checkIn);
// sessStore.setItem("check-out-date", checkOut);
// sessStore.setItem("numberOfGuests", guests);
// sessStore.setItem("yesMeals", yesMeals);
// sessStore.setItem("noMeals", noMeals);
// sessStore.setItem("balcony", balcony);
// }

// store();

// var reservationForm = $("#reservation-form-container");
// var reservationStatus = $("#reservation-status");
// var reservationConfirmation = $("#reservation-confirmation");

// reservationForm.classList.add("hide");
// reservationStatus.classList.remove("hide");

// reservationStatus.classList.add("hide");
// reservationConfirmation.classList.remove("hide");
