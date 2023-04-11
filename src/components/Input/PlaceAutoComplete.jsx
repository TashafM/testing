import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

const PlaceAutoComplete = () => {
  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: "AIzaSyAROpxxRmrXiah-FooutbY7rmY1m8HnucQ",
    });

  const [options, setOptions] = useState([]);

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails) => setOptions(placeDetails?.address_components ?? [])
      );
  }, [placePredictions, placesService]);

  console.log({ options });

  return (
    <>
      <Autocomplete
        freeSolo={false}
        id="free-solo-2-demo"
        disableClearable
        options={options}
        getOptionLabel={(option) => option.long_name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            onChange={(e) => {
              console.log(e.target.value);
              getPlacePredictions({ input: e.target.value });
            }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </>
  );
};

export default PlaceAutoComplete;
