export const getTemplateString = (value: string | number): string => {
  return `${Math.floor(Number(value))}`;
};
