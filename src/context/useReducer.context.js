import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [
    { loading, sidebar, sort, price, categories, brands, outOfStock, products },
    dispatch,
  ] = useReducer(reducer, {
    loading: false,
    sidebar: false,
    sort: null,
    price: 100000,
    categories: {
      processor: false,
      ram: false,
      graphicsCard: false,
      liquidCooler: false,
      keyboardAndMouse: false,
      speaker: false,
      motherBoard: false,
      cabinet: false,
    },
    brands: {
      intel: false,
      amd: false,
      nvidia: false,
      coolerMaster: false,
      corsair: false,
      logitech: false,
      asus: false,
      msi: false,
    },
    outOfStock: true,
    products: [],
  });

  return (
    <ReducerContext.Provider
      value={{
        loading,
        sidebar,
        sort,
        products,
        price,
        categories,
        brands,
        outOfStock,
        dispatch,
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
