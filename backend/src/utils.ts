export const round = (n: number, precision = 0): number => Math.floor(n * 10 ** precision) / 10 ** precision;

export const random = (to: number, from = 0): number => Math.floor(Math.random() * (to - from)) + from;

export const shuffleArray = <T>(array: T[], lengthLimit = Infinity): T[] => {
  array = [...array];
  const shuffled: T[] = [];
  const limit = Math.max(array.length - lengthLimit, 0);
  for (let i = array.length; i > limit; i--) shuffled.push(array.splice(random(i), 1)[0]);
  return shuffled;
};

export const getCurrentTimestampInSeconds = (precision = 99): number => {
  return round(Date.now() / 1000, precision);
};
