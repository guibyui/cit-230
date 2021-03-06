'use strict';

var sessStore = window.sessionStorage;
window.addEventListener('DOMContentLoad', getData());

function getData() {
   let firstNameId = document.getElementById("firstNameId");
   firstNameId.innerHTML = sessStore.getItem("firstName");

   firstNameId = "Name: " + firstNameId;

   let lastNameId = document.getElementById("lastNameId");
   lastNameId.innerHTML = sessStore.getItem("last-name");

   let emailAddressId = document.getElementById("emailAddressId");
   emailAddressId.innerHTML = sessStore.getItem("email");
   
   let phoneNumberId = document.getElementById("phoneNumberId");
   phoneNumberId.innerHTML = sessStore.getItem("phone");

   let countryId = document.getElementById("countryId");
   countryId.innerHTML = sessStore.getItem("country");

   let LocationId = document.getElementById("LocationId");
   LocationId.innerHTML = sessStore.getItem("location");

   let checkInDateId = document.getElementById("checkInDateId");
   checkInDateId.innerHTML = sessStore.getItem("check-in-date");

   let checkOutDateId = document.getElementById("checkOutDateId");
   checkOutDateId.innerHTML = sessStore.getItem("check-out-date");

   let numberOfGuestsId = document.getElementById("numberOfGuestsId");
   numberOfGuestsId.innerHTML = sessStore.getItem("numberOfGuests");

   let yesMealsId = document.getElementById("yesMealsId");
   yesMealsId.innerHTML = sessStore.getItem("yesMeals");

   let noMealsId = document.getElementById("noMealsId");
   noMealsId.innerHTML = sessStore.getItem("noMeals");

   let balconyId = document.getElementById("balconyId");
   balconyId.innerHTML = sessStore.getItem("balcony");

}

function toggleMenuButton() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }