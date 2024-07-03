// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
/**
 * 1. Create fuction that update value in object
 * 2. Create function that add new item to object
 * 3. Using loop to find total value (price x qty)
 * 4. log total value from (3)
 */

function updateInventory(item, property, value) {
  if (inventory?.[item]?.hasOwnProperty(property)) {
    inventory[item][property] = value;
    console.log(inventory);
  } else {
    console.log(`no item name "${item}" in inventory.`);
  }
}

function addInventory(item, price, quantity) {
  if (!inventory?.[item]) {
    inventory[item] = {price, quantity};
    console.log(inventory);
  } else { 
    console.log(`Item name : "${item}" already exists in inventory.`);
  }
}

//Finding total stocks value using loop
function sumStock() {
  let totalStock = 0;

  for (let item in inventory) {
    totalStock += inventory[item]["price"] * inventory[item]["quantity"];
  }

  let message = `Total inventory value: ${totalStock} baht`;
  return message;
}

//execute
updateInventory("apple", "quantity", 200);
addInventory("orange", 20, 300);
console.log(inventory);

let totalValue = sumStock();
console.log(totalValue);

