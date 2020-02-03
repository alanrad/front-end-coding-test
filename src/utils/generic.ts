// loop x times and execute a function
export const times = (num: number) => (func: (num: number) => void) => {
  if (num > 0) {
    func(num);
    times(num - 1)(func);
  }
};
