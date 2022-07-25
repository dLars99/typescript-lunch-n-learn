export const castBoolean = () => {
  const bool = 2;

  const typedBool = bool as unknown as boolean;

  const castedBool = Boolean(bool);

  console.log({ typedBool });
  console.log({ castedBool });
};
