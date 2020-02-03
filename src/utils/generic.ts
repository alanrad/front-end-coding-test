// loop x times and execute a function
export const times = (num: number) => (func: (num: number) => void) => {
  if (num > 0) {
    func(num);
    times(num - 1)(func);
  }
};

// display the participation rate as a percentage
export const numberToPercentage = (num: number): string => {
  return `${Math.round((num * 100) / 1)}%`;
};

// compute the average of numbers in an array
export const getAverageofNumbers = (array: number[]): number => {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum > 0 ? Math.round(sum / array.length) : 0;
};
