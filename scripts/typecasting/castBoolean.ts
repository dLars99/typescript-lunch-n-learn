export const castBoolean = () => {
  const bool = "true";

  const typedBool = bool as unknown as boolean;

  const castedBool = Boolean(bool);

  console.log({ typedBool });
  console.log({ castedBool });
};
