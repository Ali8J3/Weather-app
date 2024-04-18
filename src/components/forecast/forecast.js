/* eslint-disable jsx-a11y/img-redundant-alt */
import "./forecast.css";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const hoursNames = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "00",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek)); // this is a little treacly, first we find out what day is it today(number), then use that number to slice the days before that day in  a week, but we want a full week forecast so we show the sliced days after the rest of this week, you know...

  const hourInDay = new Date().getHours();
  const forecastHours = hoursNames
    .slice(hourInDay, hoursNames.length)
    .concat(hoursNames.slice(0, hourInDay));

  return (
    <div className="forecast">
    {/* hourly Forecast👇 */}
      <div className="forecast-container">
        <span className="forecast-heading">
          <svg
            className="hourlyForecastSVG"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <h1 className="forecast-title">Hourly Forecast</h1>
        </span>
        <hr />
        <div className="forecast-data">
          {data.list.splice(8, 15).map((item, idx) => (
            <div key={idx} className="forecast-item">
              <p className="time">{`${forecastHours[idx]}:00`}</p>
              <span className="forecast-temperature">
                {Math.round(item.main.temp)}°C
              </span>
              <img
                className="forecast-image"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="hourly-image"
              />
            </div>
          ))}
        </div>
      </div>
    {/* Daily Forecast 👇*/}
      <div className="forecast-container">
        <span className="forecast-heading">
          <svg id="Line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <title>1</title>
            <path d="M54,11.19482H47.57129a4.00016,4.00016,0,0,0-8-.00577c.00625.00511-15.14873.00583-15.14258-.00007a4,4,0,1,0-8,.00584H10a6.00657,6.00657,0,0,0-6,6V50.80811a6.00657,6.00657,0,0,0,6,6H54a6.00657,6.00657,0,0,0,6-6V17.19482A6.00657,6.00657,0,0,0,54,11.19482Zm-44,2h6.42871a4.0015,4.0015,0,0,0,4,3.99707,1.00016,1.00016,0,0,0-.003-2,1.99917,1.99917,0,0,1-1.997-1.99708V11.189a2,2,0,0,1,4,.00293H20.95508a1.0002,1.0002,0,0,0,.00007,2H39.57129a4.00149,4.00149,0,0,0,3.99707,4,1.00016,1.00016,0,0,0-.00007-2,1.99916,1.99916,0,0,1-1.997-1.99708V11.189a2,2,0,0,1,4,.00586H44.09961a1.00018,1.00018,0,0,0,.00005,2H54a4.00428,4.00428,0,0,1,4,4v5.56836H6V17.19482A4.00428,4.00428,0,0,1,10,13.19482ZM54,54.80811H10a4.00428,4.00428,0,0,1-4-4V24.76318H58V50.80811A4.00428,4.00428,0,0,1,54,54.80811Z"></path>
            <path d="M48,27.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,48,27.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,48,31.78564Z"></path>
            <path d="M48,36.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,48,36.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,48,40.78564Z"></path>
            <path d="M48,45.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,48,45.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,48,49.78564Z"></path>
            <path d="M32,27.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,32,27.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,32,31.78564Z"></path>
            <path d="M32,36.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,32,36.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,32,40.78564Z"></path>
            <path d="M32,45.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,32,45.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,32,49.78564Z"></path>
            <path d="M16,27.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,16,27.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,16,31.78564Z"></path>
            <path d="M16,36.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,16,36.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,16,40.78564Z"></path>
            <path d="M16,45.78564a3.00019,3.00019,0,0,0,.00009,6A3.00019,3.00019,0,0,0,16,45.78564Zm0,4a1.00019,1.00019,0,0,1,.00006-2A1.00019,1.00019,0,0,1,16,49.78564Z"></path>
          </svg>
          <h1 className="forecast-title">Daily Forecast</h1>
        </span>
        <hr />
        <div className="forecast-data">
          {data.list.splice(0, 7).map((item, idx) => (
            <div key={idx} className="forecast-item">
              <p className="time"> {forecastDays[idx]}</p>
              <span className="forecast-temperature">
                {(Math.round(item.main.temp_min) +
                  Math.round(item.main.temp_max)) /
                  2}
                °C
              </span>
              <img
                className="forecast-image"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="daily-image"
              />
            </div>
          ))}
        </div>
      </div>
    {/* Mini Forecasts 👇*/}
      <div className="mini-forecast-container">
        {/* ________________Mini Forecast => Part 1 👇___________________ */}
        <div className="mini-forecast">
          <span className="forecast-heading">
            {/* put the svg here */}
            <h1 className="forecast-title">Some Thing</h1>
          </span>
          <div className="forecast-data">
            {/* put the data from api here */}
          </div>
        </div>
        {/* ________________Mini Forecast => Part 2 👇_________________ */}
        <div className="mini-forecast">
          <span className="forecast-heading">
            {/* put the svg here */}
            <h1 className="forecast-title">Some Thing Else</h1>
          </span>
          <div className="forecast-data">
            {/* put the data from api here */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forecast;
