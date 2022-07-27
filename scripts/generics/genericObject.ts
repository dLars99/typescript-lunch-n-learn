interface GenericObject<T> {
  count: number;
  item: T;
}

const genericObject: GenericObject<string> = {
  count: 120,
  item: "sandwiches",
};
