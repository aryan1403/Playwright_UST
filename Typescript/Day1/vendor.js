var vendors = [
    { id: 3, name: "Naveen", productName: "Watch", price: 600 },
    { id: 1, name: "Vishal", productName: "Airpods", price: 750 },
    { id: 2, name: "Ranjith", productName: "Tv", price: 800 },
];
vendors.sort(function (v1, v2) { return v1.id > v2.id ? -1 : 1; }).forEach(function (e) {
    console.log("ID: ".concat(e.id, ", \n      Name: ").concat(e.name, ", \n      Product: ").concat(e.productName, ", \n      Price: ").concat(e.price));
});
// id > id ? 1 : 0
/*
for (let i = 0; i < vendors.length - 1; i++) {
  for (let j = 0; j < vendors.length - i - 1; j++) {
    if (vendors[j].id > vendors[j + 1].id) {
      const temp = vendors[j];
      vendors[j] = vendors[j + 1];
      vendors[j + 1] = temp;
    }
  }
}

vendors.forEach((e) => {
  console.log(`ID: ${e.id},
    Name: ${e.name},
    Product: ${e.productName},
    Price: ${e.price}`);
});*/
