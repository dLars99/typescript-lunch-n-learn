export const overrideInherit = () => {
  interface MainObject {
    id: string;
    name: string;
    foreignId: string;
  }

  // This will throw an error!
  //   interface Extension extends MainObject {
  //     foreignId: number;
  //   }

  // Alternative (this is a hack!)
  // interface Extension extends Omit<MainObject, 'foreignId'> {
  //     foreignId: number;
  // }
};

export const basicIntersection = () => {
  type MainObject = {
    id: string;
    name: string;
    foreignId: string;
  };

  type Extension = {
    foreignId: number;
  };

  type Intersection = MainObject & Extension;

  /* Nope */
  // const mainObject: Intersection = {
  //   id: "1",
  //   name: "Spork",
  //   foreignId: "3",
  // };
};
