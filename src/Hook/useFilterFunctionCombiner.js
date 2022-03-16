import { useFilterReducerContext } from "../context/useFilterReducer.context";
import {
  getSortedProducts,
  priceRangeSorter,
  categoryFilter,
  brandFilter,
  outOfStockFilter,
} from "../reducer/filterReducerFunctions";

export const useFilterFunctionCombiner = () => {
  const { sort, price, categories, brands, outOfStock, products } =
    useFilterReducerContext();

  const priceRangeSort = priceRangeSorter(products, price);

  const categoryFilters = categoryFilter(priceRangeSort, categories);

  const brandFilters = brandFilter(categoryFilters, brands);

  const outOfStockFilters = outOfStockFilter(brandFilters, outOfStock);

  const sortedProducts = getSortedProducts(outOfStockFilters, sort);

  return { sortedProducts };
};
