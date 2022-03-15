import { useReducerContext } from "../context/useReducer.context";
import {
  getSortedProducts,
  priceRangeSorter,
  categoryFilter,
  brandFilter,
  outOfStockFilter,
} from "../reducer/reducerFunctions";

export const useFunctionCombiner = () => {
  const { sort, price, categories, brands, outOfStock, products } =
    useReducerContext();

  const priceRangeSort = priceRangeSorter(products, price);

  const categoryFilters = categoryFilter(priceRangeSort, categories);

  const brandFilters = brandFilter(categoryFilters, brands);

  const outOfStockFilters = outOfStockFilter(brandFilters, outOfStock);

  const sortedProducts = getSortedProducts(outOfStockFilters, sort);

  return { sortedProducts };
};
