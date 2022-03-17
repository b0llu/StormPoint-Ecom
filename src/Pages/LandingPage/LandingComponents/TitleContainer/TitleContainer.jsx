import "./TitleContainer.css";
import { Link } from "react-router-dom";
import { ProductContainer, Sidebar } from "../../../../Components";
import { ProductPage } from "../../../ProductPage/ProductPage";
import { useFilterReducerContext } from "../../../../context/FilterReducer.context";

export const TitleContainer = () => {
  const { dispatch } = useFilterReducerContext();
  return (
    <div className="title-container">
      <img
        className="hero-img"
        src="https://cdn.discordapp.com/attachments/470238446514995222/952524810385227786/hero-img.png"
      />
      <div className="hero-section">
        <h1 className="name">Stormpoint</h1>
        <p>"Build Your Ultimate Setup"</p>
        <Link
          to="/products"
          element={
            <ProductContainer>
              <Sidebar />
              <ProductPage />
            </ProductContainer>
          }
        >
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="btn primary-btn"
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};
