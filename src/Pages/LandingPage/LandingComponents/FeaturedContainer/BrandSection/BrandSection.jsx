import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../../Components";
import { useFilterReducerContext } from "../../../../../context/FilterReducer.context";

export const BrandSection = () => {
  const { loading, dispatch } = useFilterReducerContext();

  const [brandData, setBrandData] = useState([]);

  const navigate = useNavigate();

  // initializing brands from data
  useEffect(() => {
    dispatch({ type: "LOADING" }),
      (async function () {
        const { data } = await axios.get("/api/brands");
        setBrandData(data.brands);
        dispatch({ type: "LOADING" });
      })();
  }, []);

  const brandHandler = (brand) => {
    dispatch({ type: "RESET" });
    dispatch({
      type: "BRAND_FILTER",
      payload: brand,
    });
    navigate("/products");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="categories-section">
          {brandData.map((brand) => {
            return (
              <div
                onClick={() => brandHandler(brand.value)}
                value={brand.value}
                key={brand.id}
                className="category"
              >
                <img className="rsp-img" src={brand.image} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
