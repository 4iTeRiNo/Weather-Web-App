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

export const getAPIUrl = (endpoint: APIEndpoints = 'forecast', queryParams: queryParams = APIMethods): string => {
    queryParams = Object.entries(APIMethods.forecast)
        .map((item) => {
            return `&${item[0]}=${item[1]}`;
        })
        .join('');

    return `https://api.weatherapi.com/v1/${endpoint}.json?key=${API_KEY}&${queryParams}}`;
};
