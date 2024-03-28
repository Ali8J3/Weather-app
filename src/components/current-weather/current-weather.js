import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top */}
      <div className="top">
        <h1 className="temperature">{Math.round(data.main.temp)}</h1>
        <p className="weather-description">{data.weather[0].description}</p>
        {/* <div className="">
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img className="weather-icon"  alt="weather"  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}   /> */}
      </div>

      {/* Bottom */}
      <div className="details">
        {/* Feels Like */}
        <div className="parameter-row">
          <span className="parameter-label">Feels like</span>
          <span className="parameter-value">
            {Math.round(data.main.feels_like) + "°C"}
          </span>
        </div>
        {/* Wind */}
        <div className="parameter-row">
          <span className="parameter-label">Wind</span>
          <span className="parameter-value">{data.wind.speed + `m/s`}</span>
        </div>
        {/* Humidity */}
        <div className="parameter-row">
          <span className="parameter-label">Humidity</span>
          <span className="parameter-value">{data.main.humidity + `%`}</span>
        </div>
        {/* Pressure */}
        <div className="parameter-row">
          <span className="parameter-label">Pressure</span>
          <span className="parameter-value">{data.main.pressure + `hPa`}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
