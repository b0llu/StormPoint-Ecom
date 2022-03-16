import { useFilterReducerContext } from "../../context/useFilterReducer.context";
import "./LandingContainer.css";

export const LandingContainer = ({ children }) => {
  const { sidebar } = useFilterReducerContext();
  return (
    <section className={`landing-container ${sidebar ? "position-fixed" : ""}`}>
      {children}
    </section>
  );
};
