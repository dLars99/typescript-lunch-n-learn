export const genericFunction = <T>(arg1: number, arg2: T): T[] => {
  const arr: T[] = [];
  for (let i = 0; i < arg1; i++) {
    arr.push(arg2);
  }
  return arr;
};
