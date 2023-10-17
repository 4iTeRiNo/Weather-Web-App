const API_KEY = import.meta.env.VITE_WEATHER_KEY;

type APIEndpoints = 'forecast';

export const getAPIUrl = (endpoint: APIEndpoints = 'forecast', queryParams: {q: string}): string => {
  const BASE_URl = `https://api.weatherapi.com/v1/.${endpoint}.json?`;

  const params = Object.entries({
    ...queryParams,
    key: API_KEY,
    day: 3,
    aqi: 'yes',
  })
    .map(([key, value]) => {
      return `&${key}=${value}`;
    })
    .join('');

  return `${BASE_URl}${params}`;
};
