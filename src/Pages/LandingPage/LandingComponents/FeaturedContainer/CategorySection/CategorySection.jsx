import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../../../../Components";
import { useFilterReducerContext } from "../../../../../context/FilterReducer.context";

export const CategorySection = () => {
  const { loading, dispatch } = useFilterReducerContext();

  const [categoryData, setCategoryData] = useState([]);

  const navigate = useNavigate();

  // initializing categories from data
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/categories");
      setCategoryData(data.categories);
    })();
  }, []);

  const categoryHandler = (category) => {
    dispatch({ type: "RESET" });
    dispatch({
      type: "CATEGORY_FILTER",
      payload: category,
    });
    navigate('/products')
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="categories-section">
          {categoryData.map((category) => (
            <div
              onClick={() => categoryHandler(category.value)}
              value={category.value}
              key={category.id}
              className="category"
            >
                <img className="rsp-img" src={category.image} />
                <h2>{category.categoryName}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
