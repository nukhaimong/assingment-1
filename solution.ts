const formatValue = (
  value: string | number | boolean,
): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  }
  return !value;
};

const getLength = (value: string | (string | number)[]): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const filterByRating = (
  array: { title: string; rating: number }[],
): { title: string; rating: number }[] => {
  return array.filter((item) => item.rating >= 4);
};

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[],
): { id: number; name: string; email: string; isActive: boolean }[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? 'Yes' : 'No'}`,
  );
};

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[],
): (string | number)[] => {
  const uniqueArray: (string | number)[] = [];

  for (let i = 0; i < array1.length; i++) {
    let isUnique: boolean = true;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (array1[i] === uniqueArray[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      uniqueArray[uniqueArray.length] = array1[i];
    }
  }
  for (let i = 0; i < array2.length; i++) {
    let isUnique: boolean = true;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (array2[i] === uniqueArray[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      uniqueArray[uniqueArray.length] = array2[i];
    }
  }
  return uniqueArray;
};

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[],
): number => {
  const totalPrice = products.reduce((subtotal, product) => {
    const totalPriceOfProduct = product.price * product.quantity;
    let discountPrice = (totalPriceOfProduct * (product.discount ?? 0)) / 100;

    if (!product.discount || product.discount < 0 || product.discount > 100) {
      discountPrice = 0;
    }
    return subtotal + totalPriceOfProduct - discountPrice;
  }, 0);
  return totalPrice;
};
