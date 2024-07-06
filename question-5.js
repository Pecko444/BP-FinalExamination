// Question 5: Calculating Total Price in User's Cart

  /**
   * Create Application online cart that can add item and calculate total price in the cart
   */

  // (1) Calculate total price function
 function calculateTotalPrice(arrayObj) {
  // เริ่มเขียนโค้ดตรงนี้
  let totalPrice = arrayObj.reduce((accumulator, item) => accumulator + item["price"] * item["quantity"], 0);
  return totalPrice;
}

// ตัวอย่างการใช้งาน
 
const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];
 
// (2) Add item into cart function
 function updateCart(name, price, quantity) {
  const cartIndex = cart.findIndex(item => item.name === name) //finding index for condition statement

    //if already has just increase quantity
  if (cartIndex !== -1) {
    cart[cartIndex].quantity += quantity;
  } else {
    //if no push object into array cart
    cart.push({name, price, quantity});
  }
} 

// execute //
console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50

//update cart with the same object
updateCart("banana", 15, 5);
console.log(cart);
//update new item in object
updateCart("mango", 20, 5);
console.log(cart);