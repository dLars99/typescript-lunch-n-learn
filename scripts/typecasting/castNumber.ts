export const castNumber = () => {
  const num = "2";

  const typedNumber = Number(num);

  const castedNumber = num as unknown as number;

  console.log({ typedNumber });
  console.log({ castedNumber });
};
