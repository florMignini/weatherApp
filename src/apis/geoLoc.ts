import axios from "axios";
import { locationStore } from "../store/locationStore";
export const geoLocOptions = {
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const getLocalization = async (inputValue: string) => {
  const localizationStore = locationStore();
  axios
    .get(
      `${
        import.meta.env.VITE_GEOLOC_API
      }?minPopulation=1000000&namePrefix=${inputValue}`,
      geoLocOptions
    )
    .then(function (response) {
      const { data } = response.data;

      const res = data.map((city: any) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.regionCode}`,
        };
      });
      localizationStore.getlocationInfo(res);
    })
    .catch(function (error) {
      console.error(error);
    });
};
