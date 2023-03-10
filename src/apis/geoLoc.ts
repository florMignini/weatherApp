
export const geoLocOptions = {
  method: 'GET',
  url: `${import.meta.env.VITE_GEOLOC_API}`,
  headers: {
    'X-RapidAPI-Key': '9029337177mshd958f408a1f5ccbp1ab32ejsna60385006512',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};
