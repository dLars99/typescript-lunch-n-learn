class GenericClass<Type> {
  constructor(value: Type) {
    this.value = value;
  }

  private value: Type;
  public display = (): void => {
    console.log(this.value);
  };
}

const numberClass = new GenericClass(2);
const stringClass = new GenericClass("2");
const arrayClass = new GenericClass([2]);

numberClass.display(); // 2
stringClass.display(); // "2"
arrayClass.display(); // [2]

/**
 * Alternative method
 */

interface GenericClassInterface<Type> {
  value: Type;
  display: () => void;
}

class ImplementingClass<T> implements GenericClassInterface<T> {
  constructor(value: T) {
    this.value = value;
  }

  value;
  display = () => {
    console.log(this.value);
  };
}

const interfacedNumberClass = new ImplementingClass(2);
interfacedNumberClass.display(); // 2

// Or we can type the class at declaration:
class StringClass implements GenericClassInterface<string> {
  constructor(value: string) {
    this.value = value;
  }

  value;
  display = () => {
    console.log(this.value.length);
  };
}

const interfacedStringClass = new StringClass("Oh, hi Mark!");

interfacedStringClass.display(); // 12
