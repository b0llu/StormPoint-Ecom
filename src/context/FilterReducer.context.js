import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const FilterReducerContext = createContext();

const FilterReducerProvider = ({ children }) => {
  const [
    {
      loading,
      sidebar,
      sort,
      price,
      categories,
      brands,
      forToast,
      searchTerm,
      products,
      outOfStock,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: false,
    sidebar: false,
    sort: null,
    price: 100000,
    categories: {},
    brands: {},
    outOfStock: true,
    forToast: { text: "", trigger: false, selector: "" },
    searchTerm: "",
    products: [],
  });

  return (
    <FilterReducerContext.Provider
      value={{
        loading,
        sidebar,
        sort,
        price,
        categories,
        brands,
        outOfStock,
        searchTerm,
        forToast,
        products,
        dispatch,
      }}
    >
      {children}
    </FilterReducerContext.Provider>
  );
};

const useFilterReducerContext = () => useContext(FilterReducerContext);

export { useFilterReducerContext, FilterReducerProvider };
