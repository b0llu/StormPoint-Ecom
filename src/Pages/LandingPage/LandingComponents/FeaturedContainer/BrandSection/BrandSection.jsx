import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../../../../Components";
import { useFilterReducerContext } from "../../../../../context/FilterReducer.context";
import { ProductPage } from "../../../../ProductPage/ProductPage";

export const BrandSection = () => {
  const { loading, brands, dispatch } = useFilterReducerContext();

  const [brandData, setBrandData] = useState([]);

  // initializing brands from data
  useEffect(() => {
    dispatch({ type: "LOADING" }),
      (async function () {
        const { data } = await axios.get("/api/brands");
        setBrandData(data.brands);
        dispatch({ type: "LOADING" });
      })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="categories-section">
            {brandData.map((brand) => {
              return (
                <div
                  onClick={(e) =>
                    dispatch({
                      type: "BRAND_FILTER",
                      payload: e.target.value,
                    })
                  }
                  checked={brands[brand.value] ?? false}
                  value={brand.value}
                  key={brand.id}
                  className="category"
                >
                  <Link
                    to={`/products#${brand.value}`}
                    element={<ProductPage />}
                  >
                    <img className="rsp-img" src={brand.image} />
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
