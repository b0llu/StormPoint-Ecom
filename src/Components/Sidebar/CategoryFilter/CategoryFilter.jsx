import axios from "axios";
import { useState, useEffect } from "react";
import { useFilterReducerContext } from "../../../context/FilterReducer.context";

export const CartegoryFilter = () => {
  const { categories, dispatch } = useFilterReducerContext();

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
      <li className="filter-section-title">Categories</li>
      {categoryData.map((category) => (
        <li key={category.id}>
          <label className="form-label">
            <input
              className="checkbox-input"
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
      ))}
    </>
  );
};
