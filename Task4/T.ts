//  Product interface
interface Product {
    name: string;
    price: number;
  }
  
  //  calculate the total price
  function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Example usage:
  const products: Product[] = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 },
  ];
  
  const totalPrice = calculateTotalPrice(products);
  console.log("Total Price:", totalPrice); // Output: Total Price: 2150