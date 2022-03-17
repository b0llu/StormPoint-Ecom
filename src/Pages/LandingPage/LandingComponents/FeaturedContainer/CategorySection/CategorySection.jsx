import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../../../../Components";
import { useFilterReducerContext } from "../../../../../context/FilterReducer.context";
import { ProductPage } from "../../../../ProductPage/ProductPage";

export const CategorySection = () => {
  const { loading, categories, dispatch } = useFilterReducerContext();

  const [categoryData, setCategoryData] = useState([]);

  // initializing categories from data
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/categories");
      setCategoryData(data.categories);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="categories-section">
          {categoryData.map((category) => (
            <div
              onClick={(e) =>
                dispatch({ type: "BRAND_FILTER", payload: e.target.value })
              }
              checked={categories[category.value] ?? false}
              value={category.value}
              key={category.id}
              className="category"
            >
              <Link
                to={`/products?${category.value}`}
                element={<ProductPage />}
              >
                <img className="rsp-img" src={category.image} />
                <h2>{category.categoryName}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
