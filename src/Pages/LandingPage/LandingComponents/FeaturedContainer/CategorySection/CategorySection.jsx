import axios from "axios";
import { useState, useEffect } from "react";
import { Loader } from "../../../../../Components";
import { useFilterReducerContext } from "../../../../../context/FilterReducer.context";

export const CategorySection = () => {
  const { loading, dispatch } = useFilterReducerContext();

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
          {categoryData.map((categories) => (
            <div key={categories.id} className="category">
              <img className="rsp-img" src={categories.image} />
              <h2>{categories.categoryName}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
