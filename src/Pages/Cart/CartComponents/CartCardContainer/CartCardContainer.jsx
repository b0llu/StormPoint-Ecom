import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../../context/Cart.context";
import "./CartCardContainer.css";

export const CartCardContainer = ({ children }) => {
  const { cartProducts } = useCartContext();
  const navigate = useNavigate();
  return (
    <section>
      <div className="cart-container">
        <h1 className="title">My Cart ({cartProducts.length})</h1>
        {cartProducts.length <= 0 ? (
          <>
            <h1 className="title">Cart is Empty</h1>
            <h2 onClick={() => navigate("/products")} className="title-go">
              Go To Products
            </h2>
          </>
        ) : (
          <div className="item-showcase-container">{children}</div>
        )}
      </div>
    </section>
  );
};
