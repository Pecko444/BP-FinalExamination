// Question #6: Calculating Total Price in User's Cart ?????
const test = 1

//filter stocks function only show "in stock"
 function filterInStockProducts(arrayObj) {
  // เริ่มเขียนโค้ดตรงนี้
  //if input is not array log "warning"
  if (!Array.isArray(arrayObj)) {
    console.log(`input is not array`);
  }
  //filter quantitiy > 0
  const inStocks = arrayObj.filter((item) => item.quantity > 0);
  return inStocks;
}
 
// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
