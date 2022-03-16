import "./CartCardContainer.css";

export const CartCardContainer = ({ children }) => {
  return (
    <section>
      <div className="cart-container">
        {/* <h1 className="title">My Cart ({forLength.cartLength})</h1> */}
        <h1 className="title">My Cart (1)</h1>
        {/* {forLength.cartLength <= 0 ? (
          <h1 className="title">Cart is Empty</h1>
        ) : (
          <div className="item-showcase-container">{children}</div>
        )} */}
        <div className="item-showcase-container">{children}</div>
      </div>
    </section>
  );
};