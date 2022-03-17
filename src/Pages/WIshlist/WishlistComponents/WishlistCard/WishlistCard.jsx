import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/Cart.context";
import { useWishlistContext } from "../../../../context/Wishlist.context";
import { CartPage } from "../../../Cart/CartPage";
import "./WishlistCard.css";

export const WishlistCard = () => {
  const { wishlistProducts, removeFromWishlist } = useWishlistContext();
  const { cartProducts, addToCart } = useCartContext();

  return (
    <>
      {wishlistProducts.map((products) => {
        return (
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
            {products.badge && <h6 className="card-badge">{products.badge}</h6>}
            <h1
              onClick={() => {
                removeFromWishlist(products);
              }}
              className="card-subtitle"
            >
              {products.title}
              <span className="material-icons fav-added">favorite</span>
            </h1>
            <h2 className="card-title">Brand : {products.subTitle}</h2>
            <p className="card-description">{products.description}</p>
            <p className="card-description">Price: ₹{products.price}</p>
            <div className="card-btn">
              {cartProducts.some((item) => item.id === products.id) ? (
                <Link to="/Cart" element={<CartPage />}>
                  <button className="btn">Go To Cart</button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    addToCart(products);
                  }}
                  className="btn"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
