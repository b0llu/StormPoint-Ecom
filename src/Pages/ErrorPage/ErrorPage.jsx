import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="showcase-container">
      <div className="error-page">Page Not Found</div>
      <h1 onClick={() => navigate("/products")} className="error-page-back">
        Back to Products
      </h1>
    </div>
  );
};
