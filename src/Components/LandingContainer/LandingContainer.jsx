import { useReducerContext } from "../../context/useReducer.context";
import "./LandingContainer.css";

export const LandingContainer = ({ children }) => {
  const { sidebar } = useReducerContext();
  return (
    <section className={`landing-container ${sidebar ? "position-fixed" : ""}`}>
      {children}
    </section>
  );
};
