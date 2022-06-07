import {
  brandFilter,
  categoryFilter,
  getSortedProducts,
  outOfStockFilter,
  priceRangeSorter,
  searchBarHandler,
} from "./filterReducerFunctions";

describe("testing reducer", () => {
  test("should sort when sorting order is passed (high to low)", () => {
    const initialState = [
      { id: "1234", name: "Monitor", price: 200 },
      { id: "1235", name: "Ram", price: 100 },
      { id: "1236", name: "Mouse", price: 300 },
    ];

    const finalState = [
      { id: "1236", name: "Mouse", price: 300 },
      { id: "1234", name: "Monitor", price: 200 },
      { id: "1235", name: "Ram", price: 100 },
    ];

    const sortedProducts = getSortedProducts(initialState, "High-to-Low");

    expect(sortedProducts).toEqual(finalState);
  });

  test("should sort when sorting order is passed (low to high)", () => {
    const initialState = [
      { id: "1234", name: "Monitor", price: 200 },
      { id: "1235", name: "Ram", price: 100 },
      { id: "1236", name: "Mouse", price: 300 },
    ];

    const finalState = [
      { id: "1235", name: "Ram", price: 100 },
      { id: "1234", name: "Monitor", price: 200 },
      { id: "1236", name: "Mouse", price: 300 },
    ];

    const sortedProducts = getSortedProducts(initialState, "Low-to-High");

    expect(sortedProducts).toEqual(finalState);
  });

  test("should return intial state if nothing to sort", () => {
    const initialState = [
      { id: "1234", name: "Monitor", price: 200 },
      { id: "1235", name: "Ram", price: 100 },
      { id: "1236", name: "Mouse", price: 300 },
    ];

    const sortedProducts = getSortedProducts(initialState, null);

    expect(sortedProducts).toEqual(initialState);
  });

  test("should filter when filter key word is passed (categoryfilter)", () => {
    const initialState = [
      { id: "1234", name: "Monitor", price: 200, categoryName: "asus" },
      { id: "1235", name: "Ram", price: 100, categoryName: "msi" },
      { id: "1236", name: "Mouse", price: 300, categoryName: "asus" },
      { id: "1237", name: "Keyboard", price: 300, categoryName: "logitech" },
    ];

    const filterOrder = { msi: true, asus: true };

    const finalState = [
      { id: "1235", name: "Ram", price: 100, categoryName: "msi" },
      { id: "1234", name: "Monitor", price: 200, categoryName: "asus" },
      { id: "1236", name: "Mouse", price: 300, categoryName: "asus" },
    ];

    const filteredProducts = categoryFilter(initialState, filterOrder);

    expect(filteredProducts).toEqual(finalState);
  });

  test("should return all products if none of the categoryFilter is selected", () => {
    const initialState = [
      { id: "1234", name: "Monitor", price: 200, categoryName: "asus" },
      { id: "1235", name: "Ram", price: 100, categoryName: "msi" },
      { id: "1236", name: "Mouse", price: 300, categoryName: "asus" },
      { id: "1237", name: "Keyboard", price: 300, categoryName: "logitech" },
    ];

    const filteredProducts = categoryFilter(initialState, {});

    expect(filteredProducts).toEqual(initialState);
  });

  test("should filter when filter key word is passed (brandfilter)", () => {
    const initialState = [
      { id: "1234", name: "Monitor", price: 200, brandName: "asus" },
      { id: "1235", name: "Ram", price: 100, brandName: "msi" },
      { id: "1236", name: "Mouse", price: 300, brandName: "asus" },
      { id: "1237", name: "Keyboard", price: 300, brandName: "logitech" },
    ];

    const filterOrder = { msi: true, asus: true };

    const finalState = [
      { id: "1235", name: "Ram", price: 100, brandName: "msi" },
      { id: "1234", name: "Monitor", price: 200, brandName: "asus" },
      { id: "1236", name: "Mouse", price: 300, brandName: "asus" },
    ];

    const filteredProducts = brandFilter(initialState, filterOrder);

    expect(filteredProducts).toEqual(finalState);
  });

  test("should return all products if none of the brandFilter is selected", () => {
    const initialState = [
      { id: "1234", name: "Monitor", price: 200, categoryName: "asus" },
      { id: "1235", name: "Ram", price: 100, categoryName: "msi" },
      { id: "1236", name: "Mouse", price: 300, categoryName: "asus" },
      { id: "1237", name: "Keyboard", price: 300, categoryName: "logitech" },
    ];

    const filteredProducts = brandFilter(initialState, {});

    expect(filteredProducts).toEqual(initialState);
  });

  test("should remove out of stock products", () => {
    const initialState = [
      { id: "1234", name: "Monitor", inStock: false },
      { id: "1235", name: "Ram", inStock: true },
      { id: "1236", name: "Mouse", inStock: false },
      { id: "1237", name: "Keyboard", inStock: true },
    ];

    const finalState = [
      { id: "1235", name: "Ram", inStock: true },
      { id: "1237", name: "Keyboard", inStock: true },
    ];

    const outOfStock = outOfStockFilter(initialState, false);

    expect(outOfStock).toEqual(finalState);
  });

  test("should return searched product", () => {
    const initialState = [
      { id: "1234", title: "Monitor", inStock: false },
      { id: "1235", title: "Ram", inStock: true },
      { id: "1236", title: "Mouse", inStock: false },
      { id: "1237", title: "Keyboard", inStock: true },
    ];

    const finalState = [{ id: "1235", title: "Ram", inStock: true }];

    const searchedTerm = searchBarHandler(initialState, "ram");

    expect(searchedTerm).toEqual(finalState);
  });

  test("should return all products if nothing in searchTerm", () => {
    const initialState = [
      { id: "1234", title: "Monitor", inStock: false },
      { id: "1235", title: "Ram", inStock: true },
      { id: "1236", title: "Mouse", inStock: false },
      { id: "1237", title: "Keyboard", inStock: true },
    ];

    const searchedTerm = searchBarHandler(initialState, "");

    expect(searchedTerm).toEqual(initialState);
  });

  test("should return products within range", () => {
    const initialState = [
      { id: "1234", title: "Monitor", price: 100 },
      { id: "1235", title: "Ram", price: 200 },
      { id: "1236", title: "Mouse", price: 300 },
      { id: "1237", title: "Keyboard", price: 500 },
    ];

    const finalState = [
      { id: "1234", title: "Monitor", price: 100 },
      { id: "1235", title: "Ram", price: 200 },
    ];

    const priceSort = priceRangeSorter(initialState, 250);

    expect(priceSort).toEqual(finalState);
  });
});
