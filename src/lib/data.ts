export interface Category {
  name: string;
  image: string;
}

export interface Product {
  name: string;
  image: string;
  price: string;
}

export const categories: Category[] = [
  { name: "Dining", image: "/category-dining.jpg" },
  { name: "Tea & Coffee", image: "/category-tea-coffee.jpg" },
  { name: "Interior", image: "/category-interior.jpg" },
  { name: "Garden", image: "/category-garden.jpg" },
  { name: "Gifting", image: "/category-gifting.jpg" },
];

export const newArrivals: Product[] = [
  {
    name: "Handcrafted Ceramic Plate",
    image: "/item-ceramic-plate.jpg",
    price: "£38.00",
  },
  {
    name: "Minimalist Glass Teapot",
    image: "/item-glass-teapot.jpg",
    price: "£54.00",
  },
  {
    name: "Bamboo Garden Lantern",
    image: "/item-garden-lantern.jpg",
    price: "£42.00",
  },
];

export const recommendedProducts: Product[] = [
  {
    name: "Stoneware Matcha Bowl",
    image: "/item-matcha-bowl.jpg",
    price: "£45.00",
  },
  {
    name: "Linen Cushion Cover",
    image: "/item-linen-cushion.jpg",
    price: "£32.00",
  },
  {
    name: "Minimalist Wooden Stool",
    image: "/item-wooden-stool.jpg",
    price: "£85.00",
  },
  {
    name: "Washi Paper Table Lamp",
    image: "/item-washi-lamp.jpg",
    price: "£78.00",
  },
];

export const productsAll: Product[] = [...newArrivals, ...recommendedProducts];
