import { v4 as uuid } from "uuid";

/**
 * Brand Database can be added here.
 * You can add brand of your wish with different attributes
 * */

export const brands = [
  {
    _id: uuid(),
    brandName: "Intel",
    image:
      "data:image/png;base64,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",
  },
  {
    _id: uuid(),
    brandName: "AMD",
    image:
      "https://i.etsystatic.com/23511185/r/il/7112ac/2408810313/il_fullxfull.2408810313_kqb8.jpg",
  },
  {
    _id: uuid(),
    brandName: "Nvidia",
    image:
      "https://preview.redd.it/nibcq8te6d771.jpg?width=640&crop=smart&auto=webp&s=625114dad49707a08906c90b7ed5cffa2428ef24",
  },
  {
    _id: uuid(),
    brandName: "Cooler Master",
    image:
      "https://pngimage.net/wp-content/uploads/2018/05/cooler-master-logo-png-3.png",
  },
  {
    _id: uuid(),
    brandName: "Corsair",
    image:
      "https://logodownload.org/wp-content/uploads/2014/09/corsair-logo-0.png",
  },
];
