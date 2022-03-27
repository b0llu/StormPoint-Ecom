import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilterReducerContext } from "../../../context/FilterReducer.context";
import { Loader } from "../../Loader/Loader";

export const BrandFilter = () => {
  const { loading, brands, dispatch } = useFilterReducerContext();

  const [brandData, setBrandData] = useState([]);

  const currentPath = useLocation();
  // initializing brands from data
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/brands");
      setBrandData(data.brands);
    })();
    if (currentPath.hash !== "") {
      dispatch({ type: "RESET" });
      dispatch({
        type: "BRAND_FILTER",
        payload: currentPath.hash.substring(1),
      });
    }
  }, []);

  return (
    <>
      <li className="filter-section-title">Brands</li>
      {loading ? (
        <Loader />
      ) : (
        <>
          {brandData.map((brand) => {
            return (
              <li key={brand.id}>
                <label className="form-label">
                  <input
                    className="checkbox-input"
                    checked={brands[brand.value] ?? false}
                    value={brand.value}
                    onChange={(e) =>
                      dispatch({
                        type: "BRAND_FILTER",
                        payload: e.target.value,
                      })
                    }
                    type="checkbox"
                    />
                  {brand.brandName}
                </label>
              </li>
            );
          })}
        </>
      )}
    </>
  );
};
