import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Processor",
    value: "processor",
    image: "https://m.media-amazon.com/images/I/51R7w-qjT1L._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Ram",
    value: "ram",
    image: "https://m.media-amazon.com/images/I/81lTPWJ+QZL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Graphic Card",
    value: "graphicsCard",
    image: "https://m.media-amazon.com/images/I/61i0NAuJdWS._SL1000_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Liquid Cooler",
    value: "liquidCooler",
    image: "https://m.media-amazon.com/images/I/61YodppGXsL._SL1000_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Cabinet",
    value: "cabinet",
    image: "https://m.media-amazon.com/images/I/71va1gKN5YL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Keyboard & Mouse",
    value: "keyboardAndMouse",
    image: "https://m.media-amazon.com/images/I/61pUul1oDlL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Speaker",
    value: "speaker",
    image: "https://m.media-amazon.com/images/I/712NrHlRg2L._SX522_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Motherboard",
    value: "motherBoard",
    image: "https://m.media-amazon.com/images/I/713es1ZFweL._SL1200_.jpg",
  },
];
