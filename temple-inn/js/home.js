'use strict';

var sessStore = window.sessionStorage;

function onPageLoad() {
   //update copyright date
   var todaysDate = new Date();
   var currentYear = todaysDate.getFullYear();
   document.getElementById('copyright-year').innerHTML = currentYear;
   //get document.lastmodified
   document.getElementById('lastupdated').innerHTML = document.lastModified;
}
//calls funciton after page has loaded
window.onload = onPageLoad();


function toggleMenuButton() {
   var x = document.getElementById("myLinks");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}

toggleMenuButton();

var submit = document.getElementById("submition");

submit.addEventListener("click", function () {
   console.log("It Works!!");
   sessStore.firstName = document.getElementById("first-name").value;

   let lastName = document.getElementById("last-name").value;
   sessStore.setItem("last-name", lastName);

   let email = document.getElementById("email").value;
   sessStore.setItem("email", email);

   let phone = document.getElementById("phone").value;
   sessStore.setItem("phone", phone);

   let country = document.getElementById("country").value;
   sessStore.setItem("country", country);

   let location = document.getElementById("location").value;
   sessStore.setItem("location", location);

   let checkIn = document.getElementById("check-in-date").value;
   sessStore.setItem("check-in-date", checkIn);

   let checkOut = document.getElementById("check-out-date").value;
   sessStore.setItem("check-out-date", checkOut);

   let guests = document.getElementById("numberOfGuests").value;
   sessStore.setItem("numberOfGuests", guests);

   let yesMeals = document.getElementById("yesMeals").checked;
   sessStore.setItem("yesMeals", yesMeals);

   let noMeals = document.getElementById("noMeals").checked;
   sessStore.setItem("noMeals", noMeals);

   let balcony = document.getElementById("balcony").checked;
   sessStore.setItem("balcony", balcony);
});




console.log(submit);

console.dir(noMeals);


