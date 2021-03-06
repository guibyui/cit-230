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
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
      x.className += " responsive";
   } else {
      x.className = "topnav";
   }
}

var json = "/temple-inn/js/closures.json";

function getJson(json) {
   let temple = "Temple";
   fetch(json)
      .then(function (response) {
         if (response.ok) {
            return response.json();
         }
         throw new ERROR('Response not OK.');

      })
      .then(function (data) {
         // Let's see what we got back
         console.log(data);
         console.log("templeJson");

         let p = data[temple];
         let loganJanuary = p.Logan.Year2020["January"];
         sessStore.setItem("LoganJanuary", loganJanuary);
         console.log(`Logan January is: ${loganJanuary}`);
         let januaryId = document.querySelector('#loganJanuary');
         januaryId.innerHTML = sessStore.getItem("LoganJanuary");
         // document.getElementById("january").innerHTML = data.Logan.Year2020;

         let loganFebruary = p.Logan.Year2020["February"];
         sessStore.setItem("LoganFebruary", loganFebruary);
         console.log(`Logan February is: ${loganFebruary}`);
         let februaryId = document.querySelector('#loganFebruary');
         februaryId.innerHTML = sessStore.getItem("LoganFebruary");

         let loganApril = p.Logan.Year2020["April"];
         sessStore.setItem("LoganApril", loganApril);
         console.log(`Logan February is: ${loganApril}`);
         let aprilId = document.querySelector('#loganApril');
         aprilId.innerHTML = sessStore.getItem("LoganApril");

         let loganJuly = p.Logan.Year2020["July"];
         sessStore.setItem("LoganJuly", loganJuly);
         console.log(`Logan February is: ${loganJuly}`);
         let julyId = document.querySelector('#loganJuly');
         julyId.innerHTML = sessStore.getItem("LoganJuly");

         let loganAugust = p.Logan.Year2020["August"];
         sessStore.setItem("LoganAugust", loganAugust);
         console.log(`Logan February is: ${loganAugust}`);
         let AugustId = document.querySelector('#loganAugust');
         AugustId.innerHTML = sessStore.getItem("LoganAugust");

         let loganOctober = p.Logan.Year2020["October"];
         sessStore.setItem("LoganOctober", loganOctober);
         console.log(`Logan February is: ${loganOctober}`);
         let OctoberId = document.querySelector('#loganOctober');
         OctoberId.innerHTML = sessStore.getItem("LoganOctober");

         let loganNovember = p.Logan.Year2020["November"];
         sessStore.setItem("LoganNovember", loganNovember);
         console.log(`Logan February is: ${loganNovember}`);
         let NovemberId = document.querySelector('#loganNovember');
         NovemberId.innerHTML = sessStore.getItem("LoganNovember");

         let loganDecember = p.Logan.Year2020["December"];
         sessStore.setItem("LoganDecember", loganDecember);
         console.log(`Logan February is: ${loganDecember}`);
         let DecemberId = document.querySelector('#loganDecember');
         DecemberId.innerHTML = sessStore.getItem("LoganDecember");

         // Jordan River Temple Closure
         let JordanRiverJanuary = p.JordanRiver.Year2020["January"];
         sessStore.setItem("JordanRiverJanuary", JordanRiverJanuary);
         console.log(`JordanRiver January is: ${JordanRiverJanuary}`);
         let jrJanuaryId = document.querySelector('#JordanRiverJanuary');
         jrJanuaryId.innerHTML = sessStore.getItem("JordanRiverJanuary");
         // document.getElementById("january").innerHTML = data.JordanRiver.Year2020;

         let JordanRiverApril = p.JordanRiver.Year2020["April"];
         sessStore.setItem("JordanRiverApril", JordanRiverApril);
         console.log(`JordanRiver February is: ${JordanRiverApril}`);
         let frAprilId = document.querySelector('#JordanRiverApril');
         frAprilId.innerHTML = sessStore.getItem("JordanRiverApril");

         let JordanRiverJune = p.JordanRiver.Year2020["June"];
         sessStore.setItem("JordanRiverJune", JordanRiverJune);
         console.log(`JordanRiver February is: ${JordanRiverJune}`);
         let jrJuneId = document.querySelector('#JordanRiverJune');
         jrJuneId.innerHTML = sessStore.getItem("JordanRiverJune");

         let JordanRiverJuly = p.JordanRiver.Year2020["July"];
         sessStore.setItem("JordanRiverJuly", JordanRiverJuly);
         console.log(`JordanRiver February is: ${JordanRiverJuly}`);
         let jrJulyId = document.querySelector('#JordanRiverJuly');
         jrJulyId.innerHTML = sessStore.getItem("JordanRiverJuly");

         let JordanRiverOctober = p.JordanRiver.Year2020["October"];
         sessStore.setItem("JordanRiverOctober", JordanRiverOctober);
         console.log(`JordanRiver February is: ${JordanRiverOctober}`);
         let jrOctoberId = document.querySelector('#JordanRiverOctober');
         jrOctoberId.innerHTML = sessStore.getItem("JordanRiverOctober");

         let JordanRiverNovember = p.JordanRiver.Year2020["November"];
         sessStore.setItem("JordanRiverNovember", JordanRiverNovember);
         console.log(`JordanRiver February is: ${JordanRiverNovember}`);
         let jrNovemberId = document.querySelector('#JordanRiverNovember');
         jrNovemberId.innerHTML = sessStore.getItem("JordanRiverNovember");

         let JordanRiverDecember = p.JordanRiver.Year2020["December"];
         sessStore.setItem("JordanRiverDecember", JordanRiverDecember);
         console.log(`JordanRiver February is: ${JordanRiverDecember}`);
         let jrDecemberId = document.querySelector('#JordanRiverDecember');
         jrDecemberId.innerHTML = sessStore.getItem("JordanRiverDecember");

         // Sao Paulo Temple Closure
         let SaoPauloJanuary = p.SaoPaulo.Year2020["January"];
         sessStore.setItem("SaoPauloJanuary", SaoPauloJanuary);
         console.log(`SaoPaulo January is: ${SaoPauloJanuary}`);
         let spJanuaryId = document.querySelector('#SaoPauloJanuary');
         spJanuaryId.innerHTML = sessStore.getItem("SaoPauloJanuary");
         // document.getElementById("january").innerHTML = data.SaoPaulo.Year2020;

         let SaoPauloApril = p.SaoPaulo.Year2020["April"];
         sessStore.setItem("SaoPauloApril", SaoPauloApril);
         console.log(`SaoPaulo February is: ${SaoPauloApril}`);
         let spAprilId = document.querySelector('#SaoPauloApril');
         spAprilId.innerHTML = sessStore.getItem("SaoPauloApril");

         let SaoPauloAugust = p.SaoPaulo.Year2020["August"];
         sessStore.setItem("SaoPauloAugust", SaoPauloAugust);
         console.log(`SaoPaulo February is: ${SaoPauloAugust}`);
         let spAugustId = document.querySelector('#SaoPauloAugust');
         spAugustId.innerHTML = sessStore.getItem("SaoPauloAugust");

         let SaoPauloOctober = p.SaoPaulo.Year2020["October"];
         sessStore.setItem("SaoPauloOctober", SaoPauloOctober);
         console.log(`SaoPaulo February is: ${SaoPauloOctober}`);
         let spOctoberId = document.querySelector('#SaoPauloOctober');
         spOctoberId.innerHTML = sessStore.getItem("SaoPauloOctober");

         let SaoPauloDecember = p.SaoPaulo.Year2020["December"];
         sessStore.setItem("SaoPauloDecember", SaoPauloDecember);
         console.log(`SaoPaulo February is: ${SaoPauloDecember}`);
         let spDecemberId = document.querySelector('#SaoPauloDecember');
         spDecemberId.innerHTML = sessStore.getItem("SaoPauloDecember");

         // Nauvoo Temple Closure
         // let NauvooJanuary = p.Nauvoo.Year2020["January"];
         // sessStore.setItem("NauvooJanuary", NauvooJanuary);
         // console.log(`Nauvoo January is: ${NauvooJanuary}`);
         // let naJanuaryId = document.querySelector('#NauvooJanuary');
         // naJanuaryId.innerHTML = sessStore.getItem("NauvooJanuary");
         // document.getElementById("january").innerHTML = data.Nauvoo.Year2020;

         let NauvooApril = p.Nauvoo.Year2020["April"];
         sessStore.setItem("NauvooApril", NauvooApril);
         console.log(`Nauvoo February is: ${NauvooApril}`);
         let naAprilId = document.querySelector('#NauvooApril');
         naAprilId.innerHTML = sessStore.getItem("NauvooApril");

         let NauvooMay = p.Nauvoo.Year2020["May"];
         sessStore.setItem("NauvooMay", NauvooMay);
         console.log(`Nauvoo May is: ${NauvooMay}`);
         let naMayId = document.querySelector('#NauvooMay');
         naMayId.innerHTML = sessStore.getItem("NauvooMay");

         let NauvooOctober = p.Nauvoo.Year2020["October"];
         sessStore.setItem("NauvooOctober", NauvooOctober);
         console.log(`Nauvoo February is: ${NauvooOctober}`);
         let naOctoberId = document.querySelector('#NauvooOctober');
         naOctoberId.innerHTML = sessStore.getItem("NauvooOctober");

         let nauvooNovember = p.Nauvoo.Year2020["November"];
         sessStore.setItem("NauvooNovember", loganNovember);
         console.log(`Logan November is: ${nauvooNovember}`);
         let naNovemberId = document.querySelector('#NauvooNovember');
         naNovemberId.innerHTML = sessStore.getItem("NauvooNovember");


         let NauvooDecember = p.Nauvoo.Year2020["December"];
         sessStore.setItem("NauvooDecember", NauvooDecember);
         console.log(`Nauvoo February is: ${NauvooDecember}`);
         let naDecemberId = document.querySelector('#NauvooDecember');
         naDecemberId.innerHTML = sessStore.getItem("NauvooDecember");


         console.log(templeJson);
      }).catch(function (error) {

      })
}

getJson(json);

function displayClosures() {


}