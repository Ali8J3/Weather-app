/* eslint-disable no-undef */
import "./App.css";
import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api"; // can you keep it secret?

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" "); // "lat lon" -> array lon = [lon], array lat = [lat]

    const currentWeatherFetch = fetch(
      // fetching the weather data for the searched location'
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      // the same
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch]) // #question
      .then(async (Response) => {
        const weatherResponse = await Response[0].json(); // the Response is an array and  we need to get only one value from its first index.
        const forecastResponse = await Response[1].json(); // forecast data is in its second index.

        setCurrentWeather({ city: searchData.label, ...weatherResponse }); // just have to change the city and keep the rest unChanges.
        setForecast({ city: searchData.label, ...forecastResponse }); // the same.
      })
      .catch((err) => {
        // seriously ?
        console.log(err);
      });
  };

  console.log(forecast);

  return (
  <div className="container">

      {/* Search-Bar and Current-Weather are displayed here */}
      <div className="search-and-current">
        <Search
          onSearchChange={handleOnSearchChange} // la la la la...
        />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>


      {/*  Forecast is displayed here */}
      <div className="forecast-right">
        {forecast && <Forecast data={forecast} />}
      </div>
  </div>
  );
}

export default App;
