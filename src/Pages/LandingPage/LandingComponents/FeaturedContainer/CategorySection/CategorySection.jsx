import axios from "axios";
import { useState, useEffect } from "react";

export const CategorySection = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/categories");
      setCategoryData(data.categories);
    })();
  }, []);

  return (
    <div className="categories-section">
      {categoryData.map((categories) => (
        <div key={categories.id} className="category">
          <img
            className="rsp-img"
            src={categories.image}
          />
          <h2>{categories.categoryName}</h2>
        </div>
      ))}
    </div>
  );
};
