// high to low low to high sorting
const getSortedProducts = (products, sort) => {
  if (sort === "High-to-Low") {
    return [...products].sort(
      (itemOne, itemTwo) => itemTwo["price"] - itemOne["price"]
    );
  }
  if (sort === "Low-to-High") {
    return [...products].sort(
      (itemOne, itemTwo) => itemOne["price"] - itemTwo["price"]
    );
  }
  return products;
};

// filter by category
const categoryFilter = (products, categories) => {
  const filteredCategories = [];

  if (Object.values(categories).every((value) => !value)) {
    return products;
  } else {
    for (const key in categories) {
      if (categories[key]) {
        let newCategories = products.filter(
          (item) => key === item.categoryName
        );
        filteredCategories.push(...newCategories);
      }
    }
  }
  return filteredCategories;
};

// filter by brands
const brandFilter = (products, brands) => {
  const filteredBrands = [];

  if (Object.values(brands).every((value) => !value)) {
    return products;
  } else {
    for (const key in brands) {
      if (brands[key]) {
        let newBrands = products.filter((item) => key === item.brandName);
        filteredBrands.push(...newBrands);
      }
    }
  }
  return filteredBrands;
};

// outOfSort filter
const outOfStockFilter = (products, outOfStock) => {
  return outOfStock ? products : products.filter((items) => items.inStock);
};

// search bar
const searchBarHandler = (products, searchTerm) => {
  return products.filter((value) => {
    if (searchTerm === "") {
      return value;
    } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return value;
    }
  });
};

// price range sorter
const priceRangeSorter = (products, price) => {
  return products.filter((item) => item.price <= price);
};

export {
  getSortedProducts,
  priceRangeSorter,
  categoryFilter,
  outOfStockFilter,
  searchBarHandler,
  brandFilter,
};
