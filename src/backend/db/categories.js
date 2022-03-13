import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Processor",
    image: "https://m.media-amazon.com/images/I/51R7w-qjT1L._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Ram",
    image: "https://m.media-amazon.com/images/I/81lTPWJ+QZL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Graphic Card",
    image: "https://m.media-amazon.com/images/I/61i0NAuJdWS._SL1000_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Liqid Cooler",
    image: "https://m.media-amazon.com/images/I/61YodppGXsL._SL1000_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Cabinet",
    image: "https://m.media-amazon.com/images/I/71va1gKN5YL._SL1500_.jpg",
  },
];
