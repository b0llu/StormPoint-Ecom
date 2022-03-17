import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilterReducerContext } from "../../../context/FilterReducer.context";
import { Loader } from "../../Loader/Loader";

export const CartegoryFilter = () => {
  const { loading, categories, dispatch } = useFilterReducerContext();

  const [categoryData, setCategoryData] = useState([]);

  const currentPath = useLocation();
  // initializing categories from data
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/categories");
      setCategoryData(data.categories);
    })();
    if (currentPath.search !== "") {
      dispatch({ type: "RESET" });
      dispatch({
        type: "CATEGORY_FILTER",
        payload: currentPath.search.substring(1),
      });
    }
  }, []);

  return (
    <>
      <li className="filter-section-title">Categories</li>
      {loading ? (
        <Loader />
      ) : (
        categoryData.map((category) => (
          <li key={category.id}>
            <label className="form-label">
              <input
                checked={categories[category.value] ?? false}
                value={category.value}
                onChange={(e) =>
                  dispatch({
                    type: "CATEGORY_FILTER",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
              />
              {category.categoryName}
            </label>
          </li>
        ))
      )}
    </>
  );
};
