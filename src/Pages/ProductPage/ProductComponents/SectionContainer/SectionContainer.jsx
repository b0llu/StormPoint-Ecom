import { Pagination } from "../../../../Components";
import { useFilterReducerContext } from "../../../../context/FilterReducer.context";
import { usePaginationContext } from "../../../../context/Pagination.context";
import "./SectionContainer.css";

export const SectionContainer = ({ children }) => {
  const { dispatch, products } = useFilterReducerContext();
  const { pageProducts, paginate } = usePaginationContext();

  return (
    <section>
      <i
        onClick={() => dispatch({ type: "SIDEBAR" })}
        className="fas fa-bars hamburger stick"
      ></i>
      <div className="section-container">
        <div className="children-container">{children}</div>
        <Pagination
          postsPerPage={pageProducts.postsPerPage}
          totalPost={products.length}
          paginate={paginate}
          currentPage={pageProducts.currentPage}
        />
      </div>
    </section>
  );
};
