// import {geo_success, getIpUser} from './getApUser';
const API_KEY = import.meta.env.VITE_WEATHER_KEY;

type APIEndpoints = 'forecast';

type APIEndpointsQueries = Record<APIEndpoints, Record<string, string>>;

type queryParams = APIEndpointsQueries | string;

const APIMethods: APIEndpointsQueries = {
  forecast: {
    q: 'London',
    day: '3',
    aqi: 'yes',
    lang: 'fr',
  },
};

const result = Object.entries(APIMethods.forecast)
  .map((item) => {
    return `&${item[0]}=${item[1]}`;
  })
  .join('');

export const getAPIUrl = (endpoint: APIEndpoints = 'forecast', queryParams: queryParams = result): string => {
  const BASE_URl = `https://api.weatherapi.com/v1/.${endpoint}.json?`;
  const API_URL = `key=${API_KEY}`;

  return `${BASE_URl}${API_URL}&q=${queryParams}`;
};
