function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (let key of products) {
    if (key.name === productName) return key.price;
  }
}

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let names = [];
  for (let product of products) {
    if (propName in product) names.push(product[propName]);
  }
  return names;
}

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
    return "Product ${productName} not found!";
  }
}
const atTheOldToad = {
  potions: [],
  getPotions() {
    return `List of all available potions`;
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

function add(...args) {
  let total = 0;
  for (const number of args) {
    total += number;
  }
  return total;
}

function addOverNum(value, ...args) {
  let total = 0;
  for (const numbers of args) {
    if (numbers > value) {
      total += numbers;
    }
  }
  return total;
}

function getExtremeScores(scores) {
  const numbers = {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
  return numbers;
}

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const peopleSalaries = Object.keys(salaries);
  for (let i = 0; i < peopleSalaries.length; i += 1) {
    totalSalary += peopleSalaries[i];
  }
}

function countTotalSalary(salaries) {
  let totalSalary = 0;
  for (const key of Object.keys(salaries)) {
    totalSalary += salaries[key];
  }
  return totalSalary;
}
