import axios from "axios";
import { useState, useEffect } from "react";
import { Loader, Toast } from "../../../../Components";
import { useCartContext } from "../../../../context/Cart.context";
import { useFilterReducerContext } from "../../../../context/FilterReducer.context";
import "./CartCard.css";

export const CartCard = () => {
  const { loading, dispatch } = useFilterReducerContext();
  const { cartProducts, removeFromCart } = useCartContext();
  const encodedToken = localStorage.getItem("token");

  const [somethingCart, setSomethingCart] = useState([]);

  useEffect(() => {
    dispatch({ type: "LOADING" }),
      (async function () {
        const { data } = await axios.get(`/api/user/cart`, {
          headers: {
            authorization: encodedToken,
          },
        });
        setSomethingCart(data.cart);
        dispatch({ type: "LOADING" });
      })();
  }, [cartProducts]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {somethingCart.map((products) => (
            <div
              key={products.id}
              className="card-container product-card card-shadow"
            >
              <div className="product-img">
                <img
                  className="card-img"
                  src={products.image}
                  alt={products.alt}
                />
              </div>
              {/* {wishlist.some((item) => item.id === products.id) ? (
                <h1
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: products,
                    })
                  }
                  className="card-subtitle"
                >
                  {products.title} <i className="fas fa-heart fav-added"></i>
                </h1>
              ) : ( */}
              <h1
                onClick={() =>
                  dispatch({ type: "ADD_TO_WISHLIST", payload: products })
                }
                className="card-subtitle"
              >
                {products.title} <i className="fas fa-heart"></i>
              </h1>
              {/* )} */}
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
                  onClick={() => {
                    removeFromCart(products);
                  }}
                  className="btn for-cart"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
