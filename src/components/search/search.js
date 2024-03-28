import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "./search.css"
const Search = ({ onSearchChange }) => { //*************** why why why is "onSearchChange" is in braces{} is it passed as a prop?***********
  const [search, setSearch] = useState(null);

  
  const loadOptions = (inputValue) => {
    return fetch(`https://api.api-ninjas.com/v1/city?name=${encodeURIComponent(inputValue)}`, // getting the "longitude" and "latitude" from api-ninjas.
      {
        method: "GET",
        headers: { "X-Api-Key": "hKSH1Ql+rPf6giux3/Ww8Q==TEh2tLju9Rzr2Ln9" },
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
        return {  // the returned data must be an array named "options" and must contain "value" and "label"; this is passed to App.js to get weather data from another api...
          options: data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
          })),
        };
      })
      .catch((err) => { //catches any possible errors, cool ha! not very functional thou, make it worth the space its taking...
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
        borderRadius: '6px',
        boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#3699FF' : null,
        color: state.isFocused ? 'white' : null,
    }),
}
  return (
    <AsyncPaginate className={"search-container"}
      placeholder="Search for city"
      debounceTimeout={600} // for handling the number for fetching requests at the same time.
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions} // ?
      styles={customStyles}
    />
  );
};

export default Search;
