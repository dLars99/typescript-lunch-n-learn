export const basicInherit = () => {
  interface MainObject {
    id: string;
    name: string;
  }

  interface Extension extends MainObject {
    foreignId: string;
  }

  const newObject: Extension = {
    id: "1",
    name: "Spork",
    foreignId: "3",
  };
};

export const basicIntersection = () => {
  type MainObject = {
    id: string;
    name: string;
  };

  type Extension = {
    foreignId: string;
  };

  type Intersection = MainObject & Extension;

  const newObject: Intersection = {
    id: "1",
    name: "Spork",
    foreignId: "3",
  };
};
