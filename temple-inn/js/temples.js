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

var json = "/temple-inn/js/closures.json";

function getJson(json) {
   fetch(json)
      .then(function(response) {
         if (response.ok) {
            return response.json();
         } 
          throw new ERROR('Response not OK.');
         
      })
      .then(function(data) {
         // Let's see what we got back
         console.log(data);
         console.log("templeJson");

         document.getElementById("january").innerHTML = data.Logan.Year2020;

         console.log(templeJson);
      }) .catch(function(error){
         
      })
}

getJson(json);

function displayClosures(){
   

}