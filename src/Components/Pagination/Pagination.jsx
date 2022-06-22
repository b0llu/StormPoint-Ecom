import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Pagination.css";

export const Pagination = ({
  postsPerPage,
  totalPost,
  paginate,
  currentPage,
}) => {
  const navigate = useNavigate();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (pageNumbers.length === 1) {
      paginate(1);
      navigate("/products");
    }
  }, [pageNumbers.length]);

  return (
    <>
      {pageNumbers.length > 1 && (
        <div className="pagination">
          {pageNumbers.map((num) => (
            <Link
              key={num}
              onClick={() => paginate(num)}
              className={`${
                currentPage === num && "pagination-active"
              } pagination-btn`}
              to={`/products`}
            >
              {num}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
