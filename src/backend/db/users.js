import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    firstName: "Dhruv",
    lastName: "Samant",
    email: "aA1aa",
    password: bcyrpt.hashSync("aA1aa", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    firstName: "Admin",
    lastName: "Admin",
    email: "admin@gmail.com",
    password: bcyrpt.hashSync("admin", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
