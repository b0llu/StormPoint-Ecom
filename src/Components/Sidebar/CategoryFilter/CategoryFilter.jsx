import axios from "axios";
import { useState, useEffect } from "react";

export const CartegoryFilter = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/categories");
      setCategoryData(data.categories);
    })();
  }, []);
  
  return (
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
  );
};
