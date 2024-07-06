// Question 4: Shipping Cost Calculator

function calculateShippingCost(cost) {
  // เริ่มเขียนโค้ดที่นี่
  const shippingCost = (cost >= 4000)
  ? "shipping is free."
  : (cost >= 2000)
  ? "shipping cost is 250 Baht."
  : "shipping cost is 500 Baht.";

  return shippingCost;
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
