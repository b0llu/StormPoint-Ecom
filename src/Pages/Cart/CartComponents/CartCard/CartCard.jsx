import "./CartCard.css";

export const CartCard = () => {

  return (
    <>
    <h1>hi</h1>
      {/* {cart.map((products) => (
        <div
          key={products.id}
          className="card-container product-card card-shadow"
        >
          <div className="product-img">
            <img
              className="card-img"
              src={products.source}
              alt={products.alt}
            />
          </div>
          {wishlist.some((item) => item.id === products.id) ? (
            <h1
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: products })
              }
              className="card-subtitle"
            >
              {products.title} <i className="fas fa-heart fav-added"></i>
            </h1>
          ) : (
            <h1
              onClick={() =>
                dispatch({ type: "ADD_TO_WISHLIST", payload: products })
              }
              className="card-subtitle"
            >
              {products.title} <i className="fas fa-heart"></i>
            </h1>
          )}
          <h2 className="card-title">Brand : {products.subTitle}</h2>
          <p className="card-description">{products.description}</p>
          <p className="card-description">Price: ₹{products.price}</p>
          <div className="search-categories">
            <p>Quantity:</p>
            <div className="select">
              <select
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: { id: products.id, qty: e.target.value },
                  })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="card-btn">
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: products })
              }
              className="btn for-cart"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))} */}
    </>
  );
};