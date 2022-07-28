export const genericFunction = <T>(count: number, item: T): T[] => {
  const arr: T[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(item);
  }
  return arr;
};

// genericFunction<string>(5, "roast beef sandwiches");
