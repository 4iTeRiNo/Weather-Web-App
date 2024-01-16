export const isValue = (value: unknown): value is 'temp_c' | 'wind_kph' | 'pressure_mb' =>
  ['temp_c', 'wind_kph', 'pressure_mb'].some((x) => x === value);
