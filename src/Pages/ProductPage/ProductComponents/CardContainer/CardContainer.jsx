import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../../../Components";
import { useCartContext } from "../../../../context/Cart.context";
import { useFilterReducerContext } from "../../../../context/FilterReducer.context";
import { useWishlistContext } from "../../../../context/Wishlist.context";
import { useFilterFunctionCombiner } from "../../../../Hook/useFilterFunctionCombiner";
import { CartPage } from "../../../Cart/CartPage";
import "./CardContainer.css";

export const CardContainer = () => {
  const { sortedProducts } = useFilterFunctionCombiner();
  const { loading, dispatch } = useFilterReducerContext();
  const { cartProducts, addToCart } = useCartContext();
  const { wishlistProducts, addToWishlist, removeFromWishlist } =
    useWishlistContext();

  // initializing products from data
  useEffect(() => {
    dispatch({ type: "LOADING" }),
      (async function () {
        try {
          const { data } = await axios.get("./api/products");
          dispatch({ type: "INITIALIZE_PRODUCTS", payload: data.products });
          dispatch({ type: "LOADING" });
        } catch (err) {
          console.log(err);
        }
      })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {sortedProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="card-container product-card card-shadow"
              >
                <div className="product-img">
                  <img
                    className="card-img"
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
                {product.badge && (
                  <h6 className="card-badge">{product.badge}</h6>
                )}
                {wishlistProducts.some((item) => item.id === product.id) ? (
                  <h1
                    onClick={() => removeFromWishlist(product)}
                    className="card-subtitle"
                  >
                    {product.title} <i className="fas fa-heart fav-added"></i>
                  </h1>
                ) : (
                  <h1
                    onClick={() => {
                      addToWishlist(product);
                    }}
                    className="card-subtitle"
                  >
                    {product.title} <i className="fas fa-heart"></i>
                  </h1>
                )}

                <h2 className="card-title">Brand : {product.subTitle}</h2>
                <p className="card-description">{product.description}</p>
                <p className="card-description">Price: ₹{product.price}</p>
                <div className="card-btn">
                  {cartProducts.some((item) => item.id === product.id) ? (
                    <Link to="/Cart" element={<CartPage />}>
                      <button className="btn">Go To Cart</button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="btn"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
                <div
                  className={` ${product.inStock ? "hidden" : "out-of-stock"}`}
                >
                  <span>Out Of Stock</span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
