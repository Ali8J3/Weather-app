import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion"; // well yeah instead of using a css framework we are importing the react accessible accordion component.
import "./forecast.css";

const weekDays = [
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek)); // this is a little treacly, first we find out what day is it today(number), then use that number to slice the days before that day in  a week, but we want a full week forecast so we show the sliced days after the rest of this week, you know... 

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          // what does idx do? why is it here at all?
          // also the empty tags?
          <AccordionItem key={idx}>
            <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item">
                <img
                  alt="weather"
                  className="icon-small"
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                />
                <label htmlFor="" className="day">
                  {forecastDays[idx]}
                </label>
                <label htmlFor="" className="description">
                  {item.weather[0].description}
                </label>
                <label htmlFor="" className="min-max">
                  {Math.round(item.main.temp_min)}°C/
                  {Math.round(item.main.temp_max)}
                </label>
              </div>
            </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed:</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;
