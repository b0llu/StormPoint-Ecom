import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../Components";
import { useAuthContext } from "../../context/Auth.context";
import { useCartContext } from "../../context/Cart.context";
import { useFilterReducerContext } from "../../context/FilterReducer.context";
import { useWishlistContext } from "../../context/Wishlist.context";
import "./SingleProductPage.css";

export const SingleProductPage = () => {
  const { productName } = useParams();
  const { products, dispatch, loading } = useFilterReducerContext();
  const { userState } = useAuthContext();
  const { cartProducts, addToCart } = useCartContext();
  const {addToWishlist, wishlistProducts} = useWishlistContext()

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

  const cartAdd = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  const wishlistAdd = (e, product) => {
    e.stopPropagation();
    addToWishlist(product);
  };

  return loading ? (
    <div className="for-loader">
      <Loader />
    </div>
  ) : (
    products
      .filter((product) => product.title === productName)
      .map((product) => {
        return (
          <div key={product.id} className="single-product-container">
            <div className="single-product-data">
              <div className="single-product-image">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="single-product-info">
                <h1>{product.title}</h1>
                <h2>Brand : {product.subTitle}</h2>
                <p>{product.description}</p>
                <h4>
                  price: <span>{product.price}</span>
                </h4>
                <div className="btns">
                  <div className="cart-btn-container">
                    {loading ? (
                      <Loader />
                    ) : cartProducts.some((item) => item.id === product.id) ? (
                      <Link to="/cart">
                        <button className="cart-btn">Go To Cart</button>
                      </Link>
                    ) : (
                      <>
                        {userState.id ? (
                          <button
                            onClick={(e) => {
                              cartAdd(e, product);
                            }}
                            className="cart-btn"
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <Link state={{ from: location }} to="/login">
                            <button className="cart-btn">Add to Cart</button>
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                  <div className="cart-btn-container">
                    {loading ? (
                      <Loader />
                    ) : wishlistProducts.some((item) => item.id === product.id) ? (
                      <Link to="/cart">
                        <button className="cart-btn">Go To Wishlist</button>
                      </Link>
                    ) : (
                      <>
                        {userState.id ? (
                          <button
                            onClick={(e) => {
                              wishlistAdd(e, product);
                            }}
                            className="cart-btn"
                          >
                            Add to Wishlist
                          </button>
                        ) : (
                          <Link state={{ from: location }} to="/login">
                            <button className="cart-btn">Add to Wishlist</button>
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
  );
};
