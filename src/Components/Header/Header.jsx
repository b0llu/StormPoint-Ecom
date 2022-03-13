import "./Header.css";
// import { useEcom } from "../../Context/useEcomReducer.context";
// import { Link } from "react-router-dom";
// import { ProfilePage } from "../../Profile/ProfilePage";
// import { WishlistPage } from "../../WIshlist/WishlistPage";
// import { CartPage } from "../../Cart/CartPage";

export const Header = () => {
  // const { forLength } = useEcom();

  return (
    <nav>
      <div className="navbar">
        <h1 className="name">
          <i className="fas fa-bolt"></i> Stormpoint
        </h1>
        <input className="header-input" placeholder="Search" type="text" />
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
              {/* <Link to="/Cart" element={<CartPage />}> */}
                <i className="fas fa-shopping-cart"></i>
              {/* </Link> */}
              <div className="number">1</div>
            </div>
            <div className="badge">
              <a>
                <i className="fas fa-sign-out"></i>
              </a>
            </div>
            <i id="toggle-theme" className="fas fa-moon icon"></i>
          </div>
        </div>
        <input className="mobile-input" type="text" placeholder="Search" />
      </div>
    </nav>
  );
};
