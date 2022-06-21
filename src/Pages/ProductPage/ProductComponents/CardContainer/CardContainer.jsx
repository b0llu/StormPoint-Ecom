import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../../../Components";
import { LoginBox } from "../../../AuthPage/ProfileComponents/index";
import { useAuthContext } from "../../../../context/Auth.context";
import { useCartContext } from "../../../../context/Cart.context";
import { useFilterReducerContext } from "../../../../context/FilterReducer.context";
import { useWishlistContext } from "../../../../context/Wishlist.context";
import { CartPage } from "../../../Cart/CartPage";
import "./CardContainer.css";
import { usePaginationContext } from "../../../../context/Pagination.context";

export const CardContainer = () => {
  const { finalPosts } = usePaginationContext();
  const { loading, dispatch } = useFilterReducerContext();
  const { cartProducts, addToCart } = useCartContext();
  const { wishlistProducts, addToWishlist, removeFromWishlist } =
    useWishlistContext();
  const { userState } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  // initializing products from data
  useEffect(() => {
    dispatch({ type: "LOADING" }),
      (async function () {
        try {
          const { data } = await axios.get("/api/products");
          dispatch({ type: "INITIALIZE_PRODUCTS", payload: data.products });
          dispatch({ type: "LOADING" });
        } catch (err) {
          console.log(err);
        }
      })();
  }, []);

  const wishlistAdd = (e, product) => {
    e.stopPropagation();
    addToWishlist(product);
  };

  const cartAdd = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {finalPosts.length === 0 ? (
            <h1 className="searched-product-none">Product is not Available</h1>
          ) : (
            finalPosts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="card-container product-card card-shadow"
                >
                  <div
                    onClick={() => navigate(`/${product.title}`)}
                    className="product-img"
                  >
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
                      {product.title}{" "}
                      <span className="material-icons fav-added">favorite</span>
                    </h1>
                  ) : (
                    <h1
                      onClick={(e) => {
                        wishlistAdd(e, product);
                      }}
                      className="card-title"
                    >
                      {product.title}{" "}
                      <span className="material-icons fav-add">favorite</span>
                    </h1>
                  )}
                  <h2 className="card-title">Brand : {product.subTitle}</h2>
                  <p className="card-description">{product.description}</p>
                  <p className="card-subtitle">
                    Price: <span className="color-green">₹{product.price}</span>{" "}
                  </p>
                  <div className="card-btn">
                    {loading ? (
                      <Loader />
                    ) : cartProducts.some((item) => item.id === product.id) ? (
                      <Link to="/Cart" element={<CartPage />}>
                        <button className="btn">Go To Cart</button>
                      </Link>
                    ) : (
                      <>
                        {userState.id ? (
                          <button
                            onClick={(e) => {
                              cartAdd(e, product);
                            }}
                            className="btn add-to-cart"
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <Link
                            state={{ from: location }}
                            to="/login"
                            elements={<LoginBox />}
                          >
                            <button className="btn add-to-cart">
                              Add to Cart
                            </button>
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                  <div
                    className={` ${
                      product.inStock ? "hidden" : "out-of-stock"
                    }`}
                  >
                    <span>Out Of Stock</span>
                  </div>
                </div>
              );
            })
          )}
        </>
      )}
    </>
  );
};
