import "./Header.css";
import { Link } from "react-router-dom";
import { LandingPage } from "../../Pages/LandingPage/LandingPage";
import { useLocation } from "react-router-dom";
import { CartPage } from "../../Pages/Cart/CartPage";
import { useCartContext } from "../../context/Cart.context";
import { WishlistPage } from "../../Pages/WIshlist/WishlistPage";
import { useWishlistContext } from "../../context/Wishlist.context";
import { useFilterReducerContext } from "../../context/FilterReducer.context";
import { useAuthContext } from "../../context/Auth.context";
import {
  AuthContainer,
  LoginBox,
} from "../../Pages/AuthPage/ProfileComponents";
import { DashboardPage } from "../../Pages/DashboardPage/DashboardPage";

export const Header = () => {
  const encodedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const { cartProducts } = useCartContext();
  const { wishlistProducts } = useWishlistContext();
  const { dispatch, searchTerm } = useFilterReducerContext();
  const currentPath = useLocation();
  const { signout } = useAuthContext();

  return (
    <nav>
      <div className="navbar">
        <Link to="/" element={<LandingPage />}>
          <h1 className="name">
            <i className="fas fa-bolt"></i> Stormpoint
          </h1>
        </Link>
        {currentPath.pathname === "/products" && (
          <input
            className="header-input"
            placeholder="Search"
            value={searchTerm}
            type="text"
            onChange={(e) =>
              dispatch({ type: "SEARCH_BAR", payload: e.target.value })
            }
          />
        )}
        <div className="margin-left-auto">
          <div className="icon-container">
            <p>{user}</p>
            <div className="badge">
              <Link
                to="/dashboard"
                element={
                  <DashboardPage />
                }
              >
                <i className="fa-solid fas fa-user"></i>
              </Link>
            </div>
            <div className="badge">
              <Link to="/wishlist" element={<WishlistPage />}>
                <i className="far fa-heart"></i>
              </Link>
              {wishlistProducts.length === 0 ? null : (
                <div className="number">{wishlistProducts.length}</div>
              )}
            </div>
            <div className="badge">
              <Link to="/cart" element={<CartPage />}>
                <i className="fas fa-shopping-cart"></i>
              </Link>
              {cartProducts.length === 0 ? null : (
                <div className="number">{cartProducts.length}</div>
              )}
            </div>
            <Link to="/" element={<LandingPage />}>
              {encodedToken && (
                <div onClick={() => signout()} className="badge">
                  <i className="fas fa-sign-out"></i>
                </div>
              )}
            </Link>
            <i id="toggle-theme" className="fas fa-moon icon"></i>
          </div>
        </div>
        {currentPath.pathname === "/products" && (
          <input
            onChange={(e) =>
              dispatch({ type: "SEARCH_BAR", payload: e.target.value })
            }
            className="mobile-input"
            type="text"
            placeholder="Search"
          />
        )}
      </div>
    </nav>
  );
};
