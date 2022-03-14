import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [{ loading, product }, dispatch] = useReducer(reducer, {
    loading: false,
    product: [],
  });

  return (
    <ReducerContext.Provider value={{ loading, product, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };
