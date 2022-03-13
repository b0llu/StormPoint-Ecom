import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/716gjmLvNuL._SX679_.jpg",
    title: "Intel core i7-10700k",
    subTitle: "Intel",
    description:
      "Intel - Core i7-10700K 10th Generation 8-Core - 16-Thread - 3.8 GHz (5.1 GHz Turbo) Socket LGA1200 Unlocked Desktop Processor.",
    price: 40000,
    badge: false,
    brandName: "Intel",
    categoryName: "Processor",
    alt: "i7 Processor Img",
    inStock: true,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/61RnzuOIOoL._SL1002_.jpg",
    title: "Intel Core i9-12900K",
    subTitle: "Intel",
    description:
      "Intel Core i9-12900K Desktop Processor 16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 600 Series Chipset 125W. Great performance for price.",
    price: 40000,
    badge: "New",
    brandName: "Intel",
    categoryName: "Processor",
    alt: "i9 Processor Img",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "HyperX Fury Black 16GB 2666MHz DDR4",
    image: "https://m.media-amazon.com/images/I/61Udx3CqBtL._SL1428_.jpg",
    subTitle: "HyperX",
    description:
      "HyperX is the high-performance product division of Kingston Technology, the world’s largest independent memory manufacturer.",
    price: 9120,
    badge: false,
    brandName: "HyperX",
    categoryName: "Ram",
    alt: "Ram Img",
    inStock: true,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/61ATQAOa+yL._SL1000_.jpg",
    title: "HyperX Impact 16GB 2666MHz Laptop Memory",
    subTitle: "HyperX",
    description:
      "Powerful SODIMM Performance Plug N Play Automatic Overclocking Intel XMP-Ready Profiles. Plug N Play Automatic Overclocking",
    price: 7750,
    badge: "Selling Fast",
    brandName: "HyperX",
    categoryName: "Ram",
    alt: "Ram Img",
    inStock: true,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/91g6nUHsCLL._SL1500_.jpg",
    title: "GeForce RTX 3060 Eagle OC 12G",
    subTitle: "Nvidia",
    description:
      "GIGABYTE GeForce RTX 3060 Eagle OC 12G (REV2.0) Graphics Card, 2X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060EAGLE OC-12GD REV2.0 Video Card",
    price: 80000,
    badge: false,
    brandName: "Nvidia",
    categoryName: "Graphics Card",
    alt: "Graphic Card Img",
    inStock: true,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/81pvDYeb+qL._SL1500_.jpg",
    title: "ASUS TUF Gaming GeForce RTX™ 3060 V2 12GB",
    subTitle: "Nvidia",
    description:
      "ASUS TUF Gaming GeForce RTX™ 3060 V2 OC Edition 12GB GDDR6 Buffed-up Design LHR Graphics Card with 3 Years Warranty Triple Fan (TUF-RTX3060-O12G-V2-GAMING)",
    price: 314990,
    badge: false,
    brandName: "Nvidia",
    categoryName: "Graphics Card",
    alt: "Graphic Card Img",
    inStock: false,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/81a8AWjxHvL._SL1500_.jpg",
    title: "Cooler Master MasterBox TD500",
    subTitle: "Cooler Master",
    description:
      "Cooler Master MasterBox TD500 Mesh Triple ARGB Mid Tower Gaming Cabinet with Dual 360mm Radiator Support and Crystalline Tempered Glass",
    price: 8800,
    badge: "New",
    brandName: "Cooler Master",
    categoryName: "Cabinet",
    alt: "Cabinet Img",
    inStock: true,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/71F2FEbSaQS._SL1500_.jpg",
    title: "Cooler Master MasterBox K501L",
    subTitle: "Cooler Master",
    description:
      "Cooler Master MasterBox K501L RGB Mid Tower Gaming Cabinet with Pre-Installed Fans and Tempered Glass Side Panel",
    price: 4300,
    badge: false,
    brandName: "Cooler Master",
    categoryName: "Cabinet",
    alt: "Cabinet Img",
    inStock: true,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/71c1K6btzwL._SL1500_.jpg",
    title: "Corsair iCUE H115i RGB Pro XT",
    subTitle: "Corsair",
    description:
      "Corsair iCUE H115i RGB Pro XT, 280mm Radiator, Dual 140mm PWM Fans, Software Control, Liquid CPU Cooler",
    price: 11600,
    badge: "Selling Fast",
    brandName: "Corsair",
    categoryName: "Liquid Cooler",
    alt: "Cooler Img",
    inStock: true,
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/515bLaqKqzL._SX679_.jpg",
    title: "Corsair Hydro H60 Liquid CPU Cooler",
    subTitle: "Corsair",
    description:
      "Precise pwm control: Dynamically adjust fan speed between 600 rpm to 1,700 rpm with a 120mm corsair sp series pwm fan, making it easy to minimize noise or maximize airflow",
    price: 5000,
    badge: false,
    brandName: "Corsair",
    categoryName: "Liquid Cooler",
    alt: "Cooler Img",
    inStock: true,
  },
];
