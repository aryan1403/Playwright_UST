type Vendor = {
  id: number;
  name: string;
  productName: string;
  price: number;
};

const vendors: Vendor[] = [
  { id: 3, name: "Naveen", productName: "Watch", price: 600 },
  { id: 1, name: "Vishal", productName: "Airpods", price: 750 },
  { id: 2, name: "Ranjith", productName: "Tv", price: 800 },
];

vendors.sort((v1, v2) => v1.id > v2.id ? -1 : 1).forEach((e) => 
    console.log(`ID: ${e.id}, Name: ${e.name}, Product: ${e.productName}, Price: ${e.price}`));
  
// id > id ? -ve : +ve
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
