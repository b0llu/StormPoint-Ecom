import axios from "axios";
import { useState, useEffect } from "react";
import { Loader } from "../../../../../Components";
import { useReducerContext } from "../../../../../context/useReducer.context";

export const BrandSection = () => {
  const { loading, dispatch } = useReducerContext();

  const [brandData, setBrandData] = useState([]);

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
            {brandData.map((brands) => {
              return (
                <div key={brands.id} className="category">
                  <img className="rsp-img" src={brands.image} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
