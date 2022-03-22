import { useWishlistContext } from "../../../../context/Wishlist.context";
import "./WishlistCardContainer.css";

export const WishlistCardContainer = ({ children }) => {
  const { wishlistProducts } = useWishlistContext();

  return (
    <div className="wishlist-container">
      <h1 className="title">My Wishlist ({wishlistProducts.length})</h1>
      {wishlistProducts.length <= 0 ? (
        <h1 className="title">Wishlist is Empty</h1>
      ) : (
        <div className="wishlist-cards">{children}</div>
      )}
    </div>
  );
};
