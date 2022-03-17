import { useEffect, useState } from "react";
import { useCartContext } from "../../../../context/Cart.context";
import "./AmountCard.css";

export const AmountCard = () => {
  const { cartProducts } = useCartContext();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cartProducts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cartProducts]);

  return (
    <div className="card-container card-shadow">
      <h2 className="card-subtitle bold">Price Detail</h2>
      <div className="filter-divider-line"></div>
      <h2 className="card-subtitle">
        Price: <span>Rs. {total}</span>
      </h2>
      <h2 className="card-subtitle">
        Products: <span>{cartProducts.length}</span>
      </h2>
      <h2 className="card-subtitle">
        Discount: <span>None</span>
      </h2>
      <h2 className="card-subtitle">
        Delivery Charges: <span>Free</span>
      </h2>
      <div className="filter-divider-line"></div>
      <h2 className="card-subtitle bold">
        Total Amount: <span>Rs. {total}</span>
      </h2>
      <div className="filter-divider-line"></div>
      <button className="btn">Place Order</button>
    </div>
  );
};
