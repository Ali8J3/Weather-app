import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
// import { ninjaApiOptions } from "../api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  // const loadOptions = (inputValue) => {
  //   return fetch(
  //     `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
  //     geoApiOptions
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       return {
  //         options: response.data.map((city) => {
  //           return {
  //             value: `${city.latitude} ${city.longitude}`,
  //             label: `${city.name}, ${city.countryCode}`,
  //           };
  //         }),
  //       };
  //     })

  //     .catch((err) => console.error(err));
  // };

  const loadOptions = (inputValue) => {
    return fetch(`https://api.api-ninjas.com/v1/city?name=${encodeURIComponent(inputValue)}`,
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
        return {
          options: data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
          })),
        };
      })
      .catch((err) => {
        console.error("Error fetching city data:", err);
        return { options: [] }; // Return an empty array of options in case of an error
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600} // for handling the number for fetching requests in the (prevent to have the user request a lot in the same time)
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
