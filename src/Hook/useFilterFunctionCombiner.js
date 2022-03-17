import { useFilterReducerContext } from "../context/FilterReducer.context";
import {
  getSortedProducts,
  priceRangeSorter,
  categoryFilter,
  brandFilter,
  searchBarHandler,
  outOfStockFilter,
} from "../reducer/filterReducerFunctions";

export const useFilterFunctionCombiner = () => {
  const { sort, price, categories, brands, products, searchTerm, outOfStock } =
    useFilterReducerContext();

  const priceRangeSort = priceRangeSorter(products, price);

  const categoryFilters = categoryFilter(priceRangeSort, categories);

  const brandFilters = brandFilter(categoryFilters, brands);

  const outOfStockFilters = outOfStockFilter(brandFilters, outOfStock);

  const searchBarHandle = searchBarHandler(outOfStockFilters, searchTerm);

  const sortedProducts = getSortedProducts(searchBarHandle, sort);

  return { sortedProducts };
};
