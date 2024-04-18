import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { NINJA_API_KEY } from "../../api";
import "./search.css";
const Search = ({ onSearchChange }) => {
  //*************** why why why is "onSearchChange" is in braces{} is it passed as a prop?***********
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${encodeURIComponent(
        inputValue
      )}`, // getting the "longitude" and "latitude" from api-ninjas.
      {
        method: "GET",
        headers: { "X-Api-Key": `${NINJA_API_KEY}` },
        contentType: "application/json",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("API response does not contain an array of cities");
        }
        return {
          // the returned data must be an array named "options" and must contain "value" and "label"; this is passed to App.js to get weather data from another api...
          options: data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
          })),
        };
      })
      .catch((err) => {
        //catches any possible errors, cool ha! not very functional thou, make it worth the space its taking...
        console.error("Error fetching city data:", err);
        return { options: [] }; // Return an empty array of options in case of an error
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData); //when the user enters the city name this will pass it to "search" state.
    onSearchChange(searchData); // this is passed down to App so that we can  access searchData there and send it as a prop.
  };

  // ______  Style ____________
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "6px",
      boxShadow: state.isFocused ? "0 0 0 2px #3699FF" : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: state.isFocused ? "white" : null,
    }),
  };
  const locationIconAndSearchPlaceHolder = `${(
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 2.5C21.11 2.5 12.25 11.85 12.25 23.35C12.25 34.35 30.02 59.79 30.77 60.86C30.9096 61.0561 31.0941 61.2159 31.3081 61.3262C31.522 61.4365 31.7593 61.4941 32 61.4941C32.2407 61.4941 32.478 61.4365 32.6919 61.3262C32.9059 61.2159 33.0904 61.0561 33.23 60.86C34 59.79 51.75 34.39 51.75 23.35C51.75 11.85 42.89 2.5 32 2.5ZM22.77 23.35C23.27 11.12 40.77 11.12 41.23 23.35C40.73 35.59 23.27 35.58 22.77 23.35Z"
        fill="black"
      ></path>
    </svg>
  )}
                                            Search for city`;
  return (
    <AsyncPaginate
      className={"search-container"}
      placeholder={locationIconAndSearchPlaceHolder}
      debounceTimeout={600} // for handling the number for fetching requests at the same time.
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions} // ?
      styles={customStyles}
    />
  );
};

export default Search;
