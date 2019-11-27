'use strict';
var pageNav = document.querySelector('#page-nav');
var statusContainer = document.querySelector('#status');
var contentContainer = document.querySelector('#main-content');
var locStore = window.localStorage;
var sessStore = window.sessionStorage;

// Weather Site JavaScript Functions
document.addEventListener("DOMContentLoaded", function(){
    footerDate();
    console.log(document.getElementById("primary").classList);
    document.getElementById("primary").classList.toggle("hide");
    // Variables for Wind Chill function
    // let temp = 31;
    // let speed = 5;
    // buildWC(speed, temp);
    // Time Indicator Function
    // let hour="1";
    // timeBall(hour);
    // Change Background Image
    // let outside = "snow";
    // outside = outside.toLowerCase();
    // console.log(outside);
    // changeSummaryBackground(outside);
    // Get weather json data
    let weatherURL = "../js/idahoweather.json";
    fetchWeatherData(weatherURL);
})


// Button Function
function toggleMenu() {
    console.log(document.getElementById("primary").classList);
    document.getElementById("primary").classList.toggle("hide");
}

// Copyright Year
var year = new Date().getFullYear();
document.getElementById("copyYear").innerHTML = year;

// Last Modified Date
function footerDate() {
    var date = new Date(document.lastModified);
    var realDate = date.getDate();
    var day = new Date(document.lastModified);
    var numDay = day.getDay();
    var monthy = new Date(document.lastModified);
    var mm = monthy.getMonth();
    var yyyy = new Date(document.lastModified);
    var year = yyyy.getFullYear();

    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var nameWeek = week[numDay];

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var nameMonth = month[mm];

    var fullDate = nameWeek + "," + " " + realDate + " " + nameMonth + " " + year;

    document.getElementById("today").innerHTML = fullDate;

}

// Calculate Windchill
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');

// Compute the windchill
let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

// Round answer down to integer
wc = Math.floor(wc);

// If chill is greater than temp, return the temp
wc = (wc > temp)?temp:wc;

// Display the windchill
console.log(wc);
// wc = 'Feels Like: ' + wc + '&deg;F';
// feelTemp.innerHTML = wc;
return wc;
}

// Time Indicator Function 
function timeBall(hour){
    //Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(`Ball location is: ${hour}`);
        // item.classList.remove("ball");
    }

    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".i"+hour);
    for (let item of hr){
        item.classList.toggle("ball");
    }
}

    // Function to change background image
    function changeSummaryBackground(keyword) {
        let x = document.getElementById('compContainer');
        console.log(`Outside is: ${keyword}`);

    // Case Statements to change background image into current condition
    console.log(keyword);
    switch (keyword) {
        case "clear":
            x.className += 'clear';
            break;
        case "rain":
            x.className += 'rain';
            break;
        case "fog":
            x.className += 'fog';
            break;
        case "snow":
            x.className += 'snow';
            break;
        case "cloudy":
            x.className += 'cloudy';
            break;
        default:
            console.log("Weather Type Not Found");
            break;
    }
    console.log(`The used name is: ${x.className}`);


    // Pull correct image
    let width = window.innerWidth;
    console.log(`Width of screen: ${width}`);
    if ((width >= (720)) && (keyword == 'clear')) {
        var imgLoad = "url(/weather/locations/images/clear-large.jpg)";
    }
    else if ((width >= (720)) && (keyword == 'rain')) {
        var imgLoad = "url(/weather/locations/images/rain-large.jpg)";
    }
    else if (width >= (720) && keyword == 'fog') {
        var imgLoad = "url(/weather/locations/images/fog-large.jpg)";
    }
    else if (width >= (720) && keyword == 'snow') {
        var imgLoad = "url(/weather/locations/images/snow-large.jpg)";
    }
    else if (width >= (720) && keyword == 'cloudy') {
        var imgLoad = "url(/weather/locations/images/clouds-large.jpg)";
    }
    else if (width < (720) && keyword == 'clear') {
        var imgLoad = "url(/weather/locations/images/clear-small.jpg)";
    }
    else if (width < (720) && keyword == 'fog') {
        var imgLoad = "url(/weather/locations/images/fog-small.jpg)";
    }
    else if (width < (720) && keyword == 'rain') {
        var imgLoad = "url(/weather/locations/images/rain-small.jpg)";
    }
    else if (width < (720) && keyword == 'snow') {
        var imgLoad = "url(/weather/locations/images/snow-small.jpg)";
    }
    else if (width < (720) && keyword == 'cloudy') {
        var imgLoad = "url(/weather/locations/images/clouds-small.jpg)";
    }
    else {
        console.log("Img Error");
    }
    console.log(`imgLoad is: ${imgLoad}`);

    // Set background image
    const backgroundImg = document.body.style;
    backgroundImg.setProperty("--dynamic-weather-background", `${imgLoad}`);
    console.log(`${imgLoad} is the new background.`);
    }

    // Fetch Weather Data
    function fetchWeatherData(weatherURL) {
        let cityName = 'Preston'; // The data we want from the weather.json file
        fetch(weatherURL)
        .then(function(response) {
            if(response.ok){
                return response.json();
            }
            throw new ERROR('Network response was not OK.');
            })
        .then(function(data){
        // Check the data object that was retrieved
        console.log(data);
        // data is the full JavaScript object, but we only want the preston part
        // shorten the variable and focus only on the data we want to reduce typing
        let p = data[cityName];

    //**********  Get the location information  **********
        let locName = p.properties.relativeLocation.properties.city;
        console.log(`city is: ${locName}`);
        let locState = p.properties.relativeLocation.properties.state;
        console.log(`state is: ${locState}`);
        // Put them together
        let fullName = locName+ ', '+locState;
        // See if it worked, using ticks around the content in the log
        console.log(`fullName is: ${fullName}`);
        // Get longitude and latitude and combine them to a comma separated single string
        const latLong = p.properties.relativeLocation.geometry.coordinates[1] + ","+ p.properties.relativeLocation.geometry.coordinates[0];
        console.log(latLong);
        // Create a json object containing full name, latitude and longitude and store in local storage
        const prestonData = JSON.stringify({fullName, latLong});
        locStore.setItem("Preston,ID", prestonData);
        
    //**********  Get the current conditions information  **********
        // As the data is extracted from the json, store it into session storage
        sessStore.setItem("fullName",fullName);
        sessStore.setItem("latLong",latLong);
        // Get temperature data
        let temp = p.properties.relativeLocation.properties.temperature;
        let highTemp = p.properties.relativeLocation.properties.highTemp;
        let lowTemp = p.properties.relativeLocation.properties.lowTemp;
        sessStore.setItem("temp",temp);
        sessStore.setItem("highTemp",highTemp);
        sessStore.setItem("lowTemp",lowTemp);
        // Get wind data
        let windGust = p.properties.relativeLocation.properties.windGust;
        let windSpeed = p.properties.relativeLocation.properties.windSpeed;
        sessStore.setItem("windGust",windGust);
        sessStore.setItem("windSpeed",windSpeed);
        // Get hourly data using another function - should include the forecast temp, condition icons and wind speeds. The data will be stored into session storage.
        getHourly(p.properties.forecastHourly);
    })
        .catch(function(error){
            console.log('There was a fetch problem: ', error.message);
            statusContainer.innerHTML = 'Sorry, the data could not be processed.';
        })
    }

    // *************** Get Hourly Forecast Data ******************
    function getHourly(URL){
        fetch(URL)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Response not OK.');
        })
        .then(function (data) {
        console.log('Data from getHourly function:');
        console.log(data); //Let's see what we got back

        // Store 12 hours of data to session storage
        var hourData = [];
        let todayDate = new Date();
        var nowHour = todayDate.getHours();
        console.log(`nowHour is: ${nowHour}`);
        for (let i = 0, x = 11; i <= x; i++)
            if (nowHour < 24) {
                hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
                sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
                nowHour++;
            }
            else {
            nowHour = nowHour - 12;
            hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
            sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
            nowHour = 1;
            }

            // Get the shortForecast value from the first hour (the current hour)
            // This will be the condition keyword for setting the background image
            sessStore.setItem('shortForecast', data.properties.periods[0].shortForecast);

            // Call the buildPage function
            buildPage();
        })
            .catch(error => console.log('There was a getHourly error: ', error));
    }

    // *********************** Build the Weather Page ************************************
    function buildPage() {
        // Set the title with the location name at the first
        // Gets the title element so it can be worked with
        let pageTitle = document.querySelector('#page-title');
        // Create a text node containing the full name
        let fullNameNode = document.createTextNode(sessStore.getItem('fullName'));
        // inserts the fullName value before any other content that might exist
        pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
        // When this is done the title should look like this:
        // Preston, Idaho | mybetterweather.com
    }

    // Get the h1 to display the city location
    let contentHeading = document.querySelector('#contentHeading');
    contentHeading.innerHTML = sessStore.getItem('fullName');
    // The h1 in the main element should now say "Preston, Idaho"

    // Get the coordinates container for the location
    let latLon = document.querySelector('#location');
    latLon.innerHTML = sessStore.getItem('latLong');
    // The latitude and longitude should match what was stored in session storage

    // Get the condition keyword and set Background picture
    var cast = sessStore.getItem('shortForecast');
    var background = getKeyword(cast);
    changeSummaryBackground(background);

    // ************ Set Current Conditions Info **************************
    // Set the temperature information
    let highTemp = document.querySelector('#high');
    let loTemp = document.querySelector('#low');
    let currentTemp = document.querySelector('#temp');
    let feelTemp = document.querySelector('#feelTemp');
    highTemp.innerHTML = "High: " + sessStore.getItem('highTemp') + "°F";
    loTemp.innerHTML = "Low: " + sessStore.getItem('lowTemp') + "°F";
    currentTemp.innerHTML = sessStore.getItem('temp') + "°F";
    // Set wind information
    let speed = document.querySelector('#windSpeed');
    let gust = document.querySelector('#gusts');
    speed.innerHTML = "Wind Speed: " + sessStore.getItem('windSpeed') + "mph";
    gust.innerHTML = "Gusts: " + sessStore.getItem('windGust') + "mph";
    // Calculate feel like temp
    feelTemp.innerHTML = "Feels Like: " + buildWC(sessStore.getItem('windSpeed'), sessStore.getItem('temp')) + "°F";

    // ******** Set Time Indicators **************
    let thisDate = new Date();
    var currentHour = thisDate.getHours();
    let indicatorHour;
    // if Hour is greater than 12, subtract 12
    if (currentHour > 12) {
        indicatorHour = currentHour - 12;
    }
    else {
        indicatorHour = currentHour;
    };
    console.log(`Current hour in time indicator is: ${currentHour}`);
    // Set time indicator
    timeBall(indicatorHour);

    // ****************** Hourly Temperature Component *************
    // Get the hourly data from storage as an array
    let currentData = [];
    let tempHour = currentHour;
    // Adjust counter based on current time
    for (let i = 0, x = 12; i < x; i++) {
        if (tempHour <= 23) {
            currentData[i] = sessStore.getItem("hour" + tempHour).split(",");
            tempHour++;
        }
        else {
            tempHour = tempHour - 12;
            currentData[i] = sessStore.getItem("hour" + tempHour).split(",");
            console.log(`CurrentData[i][0] is: ${currentData[i][0]}`);
            tempHour = 1;
        } 
    }
    console.log(`currentData is: ${currentData}`);

    // Loop through array inserting data
    // Start with the outer container that matches the current time
    tempHour = currentHour;
    for (let i = 0, x = 12; i < x; i++) {
        if (tempHour >= 13) {
            tempHour = tempHour - 12;
        }
        document.querySelector('.temperature .o' + tempHour).innerHTML = currentData[i][0];
        tempHour++;
    }
    console.log(`Start container is: .temperature o.${tempHour}`);

// *************** Hourly Wind Component *************************
// Get hourly data from storage
let windArray = [];
let windHour = currentHour;
// Adjust counter based on current time
for (let i = 0, x = 12; i < x; i++) {
    if (windHour <= 23) {
        windArray[i] = currentData[i][1].split(" ");
        windHour++;
    }
    else {
        windHour = windHour - 12;
        windArray[i] = currentData[i][1].split(" ");
        windHour = 1;
    }
}
console.log(`windArray[i] is: ${windArray}`);

// Insert Wind data
// Start with the outer container that matches the time indicator
windHour = currentHour;
for (let i = 0, x = 12; i < x; i++) {
    if (windHour >= 13) {
        windHour = windHour - 12;
    }
    document.querySelector('.wind .o' + windHour).innerHTML = windArray[i][0];
    windHour++;
}

// ******************** Condition Component Icons ***************
let conditionHour = currentHour;
// Adjust counter based on current time
for (let i = 0, x = 12; i < x; i++) {
    if (conditionHour >= 13) {
        conditionHour = conditionHour - 12;
    }
    document.querySelector('.conditions .o' + conditionHour).innerHTML = "<img class='min' src='" + currentData[i][2] + "' alt='Hourly weather condition'>";

    conditionHour++; 

}
console.log(`Condition hour ${conditionHour}`);


// Change the status of the containers
contentContainer.setAttribute('class', ''); // removes the hide class from main
statusContainer.setAttribute('class', 'hide'); // hides the status container


//Change shortForecast to keyword
function getKeyword(shortForecast) {
    let forecast = shortForecast.toLowerCase();
    var keyword;
    if (forecast.includes("sunny") || forecast.includes("clear")){
        keyword = "clear";
    }
    else if (forecast.includes("cloud") || forecast.includes("overcast")){
        keyword = "cloudy";
    }
    else if (forecast.includes("snow") || forecast.includes("snow showers") || forecast.includes("sleet")){
        keyword = "snow";
    }
    else if (forecast.includes("rain") || forecast.includes("thunder") || forecast.includes("showers")){
        keyword = "rain";
    }
    else if (forecast.includes("fog")){
        keyword = "fog";
    }
    else {
        console.log("Forecast Error");
    }
    return keyword;
}

mainContent.setAttribute("class", ""); // Remove .hide from #main-content
statusBox.setAttribute("class", "hide"); // Add .hide to statusBox