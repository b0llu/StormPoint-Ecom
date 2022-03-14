import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading, products }, dispatch] = useReducer(reducer, {
    loading: false,
    products: [],
  });

  return (
    <ReducerContext.Provider value={{ loading, products, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
