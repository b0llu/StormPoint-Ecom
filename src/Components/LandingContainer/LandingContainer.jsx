// import { useRoute } from "../../Context/useRoute";
import "./LandingContainer.css";

export const LandingContainer = ({ children }) => {
  const { sidebar } = useRoute();
  return (
    <section className={`landing-container ${sidebar ? "position-fixed" : ""}`}>
      {children}
    </section>
  );
};