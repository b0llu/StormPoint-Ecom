import { useEffect, useState } from "react";
import "./AmountCard.css";

export const AmountCard = () => {


  // const [total, setTotal] = useState();

  // useEffect(() => {
  //   setTotal(
  //     cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
  //   );
  // }, [cart]);

  return (
    <div className="card-container card-shadow">
      <h2 className="card-subtitle bold">Price Detail</h2>
      <div className="filter-divider-line"></div>
      <h2 className="card-subtitle">
        {/* Price: <span>Rs. {total}</span> */}
        Price: <span>Rs. 2342</span>
      </h2>
      <h2 className="card-subtitle">
        {/* Products: <span>{forLength.cartLength}</span> */}
        Products: <span>1</span>
      </h2>
      <h2 className="card-subtitle">
        Discount: <span>None</span>
      </h2>
      <h2 className="card-subtitle">
        Delivery Charges: <span>Free</span>
      </h2>
      <div className="filter-divider-line"></div>
      <h2 className="card-subtitle bold">
        {/* Total Amount: <span>Rs. {total}</span> */}
        Total Amount: <span>Rs. 124214</span>
      </h2>
      <div className="filter-divider-line"></div>
      <button className="btn">Place Order</button>
    </div>
  );
};