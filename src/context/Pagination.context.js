import { createContext, useContext, useState, useEffect } from "react";
import { useFilterFunctionCombiner } from "../Hook/useFilterFunctionCombiner";
import { useWindowResize } from "../Hook/useWindowResize";

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const { dimension } = useWindowResize();
  const { sortedProducts } = useFilterFunctionCombiner();
  const [pageProducts, setPageProducts] = useState({
    currentPage: 1,
    postsPerPage: 6,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageProducts.currentPage]);

  useEffect(() => {
    if (dimension.width > 1836 && dimension.width < 2196) {
      setPageProducts({ ...pageProducts, postsPerPage: 8 });
    } else if (dimension.width > 2196 && dimension.width < 2400) {
      setPageProducts({ ...pageProducts, postsPerPage: 10 });
    } else if (dimension.width > 2400) {
      setPageProducts({ ...pageProducts, postsPerPage: 12 });
    } else {
      setPageProducts({ ...pageProducts, postsPerPage: 6 });
    }
  }, [dimension.width]);

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
