import axios from "axios";
import { useState, useEffect } from "react";
import { useReducerContext } from "../../../context/useReducer.context";
import { Loader } from "../../Loader/Loader";

export const CartegoryFilter = () => {
  const { loading } = useReducerContext();

  const [categoryData, setCategoryData] = useState([]);

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
        <>
          <li className="filter-section-title">Categories</li>
          {categoryData.map((category) => {
            return (
              <li key={category.id}>
                <label className="form-label">
                  <input type="checkbox" />
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
