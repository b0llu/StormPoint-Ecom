import axios from "axios";
import { useState, useEffect } from "react";

export const BrandSection = () => {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/brands");
      setBrandData(data.brands);
    })();
  }, []);

  return (
    <div className="categories-section">
      {brandData.map((brands) => {
        return (
          <div key={brands.id} className="category">
            <img className="rsp-img" src={brands.image} />
          </div>
        );
      })}
    </div>
  );
};
