import axios from "axios";
import { useState, useEffect } from "react";
import { useReducerContext } from "../../../context/useReducer.context";
import { Loader } from "../../Loader/Loader";

export const BrandFilter = () => {
  const { loading, brands, dispatch } = useReducerContext();

  const [brandData, setBrandData] = useState([]);

  // initializing brands from data
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/brands");
      setBrandData(data.brands);
    })();
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
                    checked={brands[brand.value]}
                    value={brand.value}
                    onClick={(e) =>
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
