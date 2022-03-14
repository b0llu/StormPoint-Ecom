import "./TitleContainer.css";
// import { Link } from "react-router-dom";
// import { ProductContainer, Sidebar } from "../../../Components/components";
// import { ProductPage } from "../../../ProductPage/ProductPage";

export const TitleContainer = () => {
  return (
    <div className="title-container">
      <img
        className="hero-img"
        src="https://cdn.discordapp.com/attachments/470238446514995222/952524810385227786/hero-img.png"
        alt=""
      />
      <div className="hero-section">
        <h1 className="name">Stormpoint</h1>
        <p>"Build Your Ultimate Setup"</p>
        {/* <Link
          to="/Products"
          element={
            <ProductContainer>
              <Sidebar />
              <ProductPage />
            </ProductContainer>
          }
        > */}
        <button className="btn primary-btn">Shop Now</button>
        {/* </Link> */}
      </div>
    </div>
  );
};
