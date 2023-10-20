export type TCity = {
  location: TLocation;
  current: TCurrent;
  forecast: TForecast;
};

type TLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

type TCurrent = {
  last_updated: string;
  temp_c: number;
  condition: {
    text: string;
  };
  air_quality: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    'us-epa-index': number;
    'gb-defra-index': number;
  };
  wind_kph: number;
  wind_dir: string;
  pressure_mb: number;
  humidity: number;
  cloud: number;
  vis_km: number;
  uv: number;
  gust_kph: number;
};

type TForecast = {
  forecastday: [
    {
      date: string;
      day: {
        maxtemp_c: string;
        mintemp_c: string;
        maxwind_kph: string;
        totalsnow_cm: string;
        daily_will_it_rain: string;
        daily_chance_of_rain: string;
        daily_will_it_snow: string;
        daily_chance_of_snow: string;
        uv: string;
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
      hour: [
        {
          time: string;
          temp_c: number;
          is_day: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: string;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          will_it_rain: number;
          chance_of_rain: number;
          will_it_snow: number;
          chance_of_snow: number;
          vis_km: number;
          gust_kph: number;
          uv: number;
        },
      ];
    },
  ];
};
