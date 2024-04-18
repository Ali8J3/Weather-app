import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top */}
      <div className="top">
        <h1 className="temperature">{Math.round(data.main.temp)}°</h1>
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
          <span className="parameter-label">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="_42.thermometer" data-name="42.thermometer">
                <path d="M36.11,39.44V10.74a6.71,6.71,0,0,0-13.41,0v28.7C13.88,45.73,18.56,60.06,29.41,60,40.25,60.06,44.94,45.73,36.11,39.44ZM29.41,58c-9.18.07-12.86-12.21-5.15-17.19a1.15,1.15,0,0,0,.44-.84V10.74a4.71,4.71,0,0,1,9.41,0V39.93a1.22,1.22,0,0,0,.45.84C42.26,45.74,38.58,58,29.41,58Z"></path>
                <path d="M45,34.63h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,34.63Z"></path>
                <path d="M45,30.48h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,30.48Z"></path>
                <path d="M45,26.33h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,26.33Z"></path>
                <path d="M45,22.19h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,22.19Z"></path>
                <path d="M45,18h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,18Z"></path>
                <path d="M39.26,15.89H45a1,1,0,0,0,0-2h-5.7A1,1,0,0,0,39.26,15.89Z"></path>
                <path d="M30.41,41.45V12.3a1,1,0,0,0-2,0V41.45c-8.78,1.42-7.95,14.14,1,14.36C38.36,55.59,39.19,42.87,30.41,41.45Zm-1,12.36c-6.9-.22-6.9-10.22,0-10.44C36.31,43.59,36.31,53.6,29.41,53.81Z"></path>
              </g>
            </svg>
            <p>Feels like </p>
          </span>
          <span className="parameter-value">
            {Math.round(data.main.feels_like) + "°C"}
          </span>
        </div>
        {/* Wind */}
        <div className="parameter-row">
          <span className="parameter-label">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="_35.wind" data-name="35.wind">
                <path d="M7.09,25.88H32c9.14-.24,9.14-13.62,0-13.86-1.34,0-5.36.84-4.36,2.79A1,1,0,0,0,29,15a4.92,4.92,0,0,1,3-1c6.5.17,6.5,9.69,0,9.86H7.09A1,1,0,0,0,7.09,25.88Z"></path>
                <path d="M43.86,38.12H7.09a1,1,0,0,0,0,2H43.86a4.93,4.93,0,1,1-3,8.87,1,1,0,0,0-1.21,1.6c4.35,3.46,11.25,0,11.09-5.54A6.93,6.93,0,0,0,43.86,38.12Z"></path>
                <path d="M51,19.14c-1.33,0-5.37.84-4.36,2.78a1,1,0,0,0,1.4.2,4.94,4.94,0,0,1,3-1c6.5.16,6.51,9.69,0,9.86H7.09a1,1,0,0,0,0,2H51C60.12,32.76,60.13,19.38,51,19.14Z"></path>
              </g>
            </svg>
            <p>Wind</p>
          </span>
          <span className="parameter-value">{data.wind.speed + `m/s`}</span>
        </div>
        {/* Humidity */}
        <div className="parameter-row">
          <span className="parameter-label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 11.6863 16 2 16 2C16 2 22 11.6863 22 16Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 9C8 10.6569 6.65685 12 5 12C3.34315 12 2 10.6569 2 9C2 6.84315 5 2 5 2C5 2 8 6.84315 8 9Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p>Humidity</p>
          </span>
          <span className="parameter-value">{data.main.humidity + `%`}</span>
        </div>
        {/* Pressure */}
        <div className="parameter-row">
          <span className="parameter-label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34315 19.5208C3.21895 16.3966 3.21895 11.3312 6.34315 8.20705L12 2.5502L17.6569 8.20705C20.781 11.3312 20.781 16.3966 17.6569 19.5208C14.5327 22.645 9.46734 22.645 6.34315 19.5208Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <p>Pressure</p>
          </span>
          <span className="parameter-value">{data.main.pressure + `hPa`}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
