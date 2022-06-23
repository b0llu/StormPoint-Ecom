import { useWishlistContext } from "../../../../context/Wishlist.context";
import "./WishlistCardContainer.css";
import { useNavigate } from "react-router-dom";

export const WishlistCardContainer = ({ children }) => {
  const { wishlistProducts } = useWishlistContext();
  const navigate = useNavigate();
  return (
    <div className="wishlist-container">
      <h1 className="title">My Wishlist ({wishlistProducts.length})</h1>
      {wishlistProducts.length <= 0 ? (
        <>
          <h1 className="title">Wishlist is Empty</h1>
          <h2 onClick={() => navigate("/products")} className="title-go">
            Go To Products
          </h2>
        </>
      ) : (
        <div className="wishlist-cards">{children}</div>
      )}
    </div>
  );
};
