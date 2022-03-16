import "./Header.css";
import { Link } from "react-router-dom";
import { LandingPage } from "../../Pages/LandingPage/LandingPage";
import { useLocation } from "react-router-dom";
import { CartPage } from "../../Pages/Cart/CartPage";
import { useCartContext } from "../../context/Cart.context";

export const Header = () => {
  const { cartProducts } = useCartContext()
  const currentPath = useLocation();

  return (
    <nav>
      <div className="navbar">
        <Link to="/" element={<LandingPage />}>
          <h1 className="name">
            <i className="fas fa-bolt"></i> Stormpoint
          </h1>
        </Link>
        {currentPath.pathname === "/products" && (
          <input className="header-input" placeholder="Search" type="text" />
        )}
        <div className="margin-left-auto">
          <div className="icon-container">
            <div className="badge">
              {/* <Link to="/Profile" element={<ProfilePage />}> */}
              <i className="fa-solid fas fa-user"></i>
              {/* </Link> */}
            </div>
            <div className="badge">
              {/* <Link to="/Wishlist" element={<WishlistPage />}> */}
              <i className="far fa-heart"></i>
              {/* </Link> */}
              <div className="number">1</div>
            </div>
            <div className="badge">
              <Link to="/cart" element={<CartPage />}>
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <div className="number">{cartProducts.length}</div>
            </div>
            <div className="badge">
              <i className="fas fa-sign-out"></i>
            </div>
            <i id="toggle-theme" className="fas fa-moon icon"></i>
          </div>
        </div>
        {currentPath.pathname === "/products" && (
          <input className="mobile-input" type="text" placeholder="Search" />
        )}
      </div>
    </nav>
  );
};
