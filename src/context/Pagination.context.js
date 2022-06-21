import { createContext, useContext, useState, useEffect } from "react";
import { useFilterFunctionCombiner } from "../Hook/useFilterFunctionCombiner";

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const { sortedProducts } = useFilterFunctionCombiner();
  const [pageProducts, setPageProducts] = useState({
    currentPage: 1,
    postsPerPage: 6,
  });

  const indexOfLastPost = pageProducts.currentPage * pageProducts.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - pageProducts.postsPerPage;
  const finalPosts = sortedProducts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setPageProducts({ ...pageProducts, currentPage: pageNumber });
  };

  return (
    <PaginationContext.Provider
      value={{
        pageProducts,
        setPageProducts,
        indexOfLastPost,
        indexOfFirstPost,
        finalPosts,
        paginate,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

const usePaginationContext = () => useContext(PaginationContext);

export { usePaginationContext, PaginationProvider };
