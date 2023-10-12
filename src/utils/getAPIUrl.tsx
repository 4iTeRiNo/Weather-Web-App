const API_KEY = import.meta.env.VITE_WEATHER_KEY;

type APIEndpoints = 'forecast';

type APIEndpointsQueries = Record<APIEndpoints, Record<string, string>>;

type queryParams = APIEndpointsQueries | string;

// решил оставить одим метод, т.к потребность в других по моему мнению отсутствует
// они приходят в объекте который отдает этот метод
// так же ругается на эту переменную. ошибку не могу понять (Fast refresh only works when a file only exports components. Move your component(s) to a separate file.eslint(react-refresh/only-export-components)) 
const APIMethods: APIEndpointsQueries = {
  forecast: {
    q: 'London',
    day: '3',
    aqi: 'yes',
    lang: 'fr',
  },
};

// Предложеления по улечшению получения этот фунции принимаются.
// додумался пока только до такого
export const defaultMethod = Object.entries(APIMethods.forecast)
  .map((item) => {
    return `&${item[0]}=${item[1]}`;
  })
  .join('');

export const getAPIUrl = (endpoint: APIEndpoints = 'forecast', queryParams: queryParams): string => {
  const BASE_URl = `https://ap.weatherapi.com/v1/.${endpoint}.json?`;
  const API_URL = `key=${API_KEY}`;

  // тут пробросил в лоб параметр для правильного получения url при успешном считывании  гео юзера
  // так как не придумал другого способа . Каюсь :(
  return `${BASE_URl}${API_URL}&q=${queryParams}`;
};
