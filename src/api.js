// export const geoApiOptions = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e10b9343b7msha17b89e3774cf16p1e82b5jsn557abd127165',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

// geo-db☝️
//IP-Data👇
// import fetch from 'node-fetch';
// const API_key = 'da7d2dcfaeaf679c13c39a72c63ccde1c86f58a5b6df4d7b9c7c851e';

// // Import the required library
// const getIPData = async () => {
//     // The URL of the API
//     const url = 'https://api.ipdata.co?api-key=da7d2dcfaeaf679c13c39a72c63ccde1c86f58a5b6df4d7b9c7c851e';

//     try {
//         // Make the GET request
//         const response = await fetch(url);

//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error('HTTP error ' + response.status);
//         }

//         // Parse the JSON from the response
//         const data = await response.json();

//         // Log the data
//         console.log(data);
//     } catch (error) {
//         // Log any errors
//         console.log(error);
//     }
// };

// getIPData();

// api ninja 👇
// const url = 'hKSH1Ql+rPf6giux3/Ww8Q==TEh2tLju9Rzr2Ln9'

// var city = 'london'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
//     headers: { 'X-Api-Key': 'hKSH1Ql+rPf6giux3/Ww8Q==TEh2tLju9Rzr2Ln9'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
// export const ninjaURL = "https://api.api-ninjas.com/v1/geocoding?city=";

// export const ninjaApiOptions = $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "e4263c035d6351aafc6d7be695254363";