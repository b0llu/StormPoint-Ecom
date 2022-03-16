import axios from "axios";
import { useState, useEffect } from "react";
import { useFilterReducerContext } from "../../../context/FilterReducer.context";
import { Loader } from "../../Loader/Loader";

export const CartegoryFilter = () => {
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
      <li className="filter-section-title">Categories</li>
      {loading ? (
        <Loader />
      ) : (
        <>
          {categoryData.map((category) => {
            return (
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
            );
          })}
        </>
      )}
    </>
  );
};
