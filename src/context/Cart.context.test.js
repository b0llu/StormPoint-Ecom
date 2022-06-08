import axios from "axios";

jest.mock("axios");

describe("testing cart", () => {
  test("should return the cart by adding the product", async () => {
    axios.post.mockResolvedValue([{ name: "monitor", price: 500 }]);
    // const cart = await addToCart({ name: "monitor", price: 500 });

    // expect(cart).toEqual([{ name: "monitor", price: 500 }]);
  });
});
