'use strict';
// Set global variable for custom header required by NWS API 
var idHeader = { headers: { "User-Agent": "Student Learning Project - yourschoolemailaddress@byui.edu" } };
var storage = window.sessionStorage;

// Call the function to get our location
getGeoLocation();

// Gets longitude and latitude of current location
function getGeoLocation() {
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
         const lat = position.coords.latitude;
         const long = position.coords.longitude;
      
         // Combine the values
         const locale = lat.toFixed(2) + "," + long.toFixed(2);
         console.log(`Lat and Long are: ${locale}.`);
      // Call getLocation function, send locale
   getLocation(locale);
         console.log(`Lat and Long are: ${locale}.`);
           
         storage.setItem("Lat and Long", locale);

   
      
        })
       } else {
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
       } // end else
      
} // end getGeoLocation


// Gets location information from the NWS API



// 'use strict';

// var idHeader = {
//    headers: {
//       "User-Agent": "Student Learning Project - nas17004@byui.edu"
//    }
// };

// //Function for celsius to fahrenheit conversion
// function convertCelcius(celsius) {
//    const fahrenheit = (1.8 * celsius) + 32;
//    return fahrenheit.toFixed(0);
// }

// //Function for meters to feet conversion
// function meterToFeet(meters) {
//    const feet = meters * 3.28;
//    return feet;
// }

// //function for meters per second to miles per hour
// function mpsToMph(metersPerSec) {
//    const milesPerHour = metersPerSec * 2.2369;
//    return milesPerHour;
// }

// // Gets current weather information for a specific weather station from the NWS API
// function getWeather(stationId) {
//    // This is the URL for current observation data 
//    const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
//    fetch(URL, idHeader)
//       .then(function (response) {
//          if (response.ok) {
//             return response.json();
//          }
//          throw new ERROR('Response not OK.');
//       })
//       .then(function (data) {
//          // Let's see what we got back
//          console.log('From getWeather function:');
//          console.log(data);

//          // Store current weather information to sessionStorage 
//          let currTemp = convertCelcius(data.properties.temperature.value);
//          window.sessionStorage.setItem("temperature", currTemp);
//          let windSpeed = mpsToMph(data.properties.windSpeed.value);
//          window.sessionStorage.setItem("windSpeed", windSpeed);
//          window.sessionStorage.setItem("windGust", data.properties.windGust.value);
//          window.sessionStorage.setItem("feelsLike", buildWC(windSpeed, currTemp));
//          window.sessionStorage.setItem("condition", data.properties.textDescription);

//          // Call the getForecast function

//          // Call the getHourly function

//       })
//       .catch(error => console.log('There was a getWeather error: ', error))
// } // end getWeather function

// // Gets weather station list and the nearest weather station ID from the NWS API
// function getStationId(stationsURL) {
//    // NWS User-Agent header (built above) will be the second parameter 
//    fetch(stationsURL, idHeader)
//       .then(function (response) {
//          if (response.ok) {
//             return response.json();
//          }
//          throw new ERROR('Response not OK.');
//       })
//       .then(function (data) {
//          // Let's see what we got back
//          console.log('From getStationId function:');
//          console.log(data);

//          // Store station ID and elevation (in meters - will need to be converted to feet) 
//          let stationId = data.features[0].properties.stationIdentifier;
//          let stationElevation = data.features[0].properties.elevation.value;
//          console.log('Station and Elevation are: ' + stationId, stationElevation);
//          // You may want to convert the elevation to feet before storing the value
//          // Store data to sessionStorage 
//          window.sessionStorage.setItem("stationId", stationId);
//          window.sessionStorage.setItem("stationElevation", stationElevation);

//          // Request the Current Weather for this station 
//          getWeather(stationId);
//       })
//       .catch(error => console.log('There was a getStationId error: ', error))
// } // end getStationId function


// // Gets location information from the NWS API
// function getLocation(locale) {
//    const URL = "https://api.weather.gov/points/" + locale;
//    // NWS User-Agent header (built above) is the second parameter 
//    fetch(URL, idHeader)
//       .then(function (response) {
//          if (response.ok) {
//             return response.json();
//          }
//          throw new ERROR('Response not OK.');
//       })
//       .then(function (data) {
//          // Let's see what we got back
//          console.log('Json object from getLocation function:');
//          console.log(data);
//          // Store data to sessionStorage 
//          window.sessionStorage.setItem("locName", data.properties.relativeLocation.properties.city);
//          window.sessionStorage.setItem("locState", data.properties.relativeLocation.properties.state);
//          let fullName = data.properties.relativeLocation.properties.city + ", " + data.properties.relativeLocation.properties.state;
//          window.sessionStorage.setItem("fullName", fullName);

//          // Store three URL's for stationId's, forecast and hourly forecast
//          // The URL's are in the returned location data object
//          window.sessionStorage.setItem("hourlyURL", data.properties.forecastHourly);
//          window.sessionStorage.setItem("forecastURL", data.properties.forecast);
//          let stationsURL = data.properties.observationStations;
//          window.sessionStorage.setItem("stationsURL", stationsURL);

//          // Call the function to get the list of weather stations
//          // using the URL for the weather station list
//          getStationId(stationsURL);
//       })
//       .catch(error => console.log('There was a getLocation error: ', error))
// } // end getLocation function


// // Gets longitude and latitude of current location
// function getGeoLocation() {
//    const status = document.getElementById('status');
//    status.innerHTML = 'Getting Location...';

//    if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//          const lat = position.coords.latitude;
//          const long = position.coords.longitude;

//          // Combine the values for the API call
//          let locale = lat + ',' + long;
//          console.log(`locate values are: ${locale}.`);

//          // Store the Values
//          window.sessionStorage.setItem("locale", locale);
//          window.sessionStorage.setItem("latitude", lat);
//          window.sessionStorage.setItem("longitude", long);

//          // Call getLocation function, send locale as a parameter
//          getLocation(locale);
//       })
//    } else {
//       statusContainer.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
//    }
// }

// getGeoLocation();
