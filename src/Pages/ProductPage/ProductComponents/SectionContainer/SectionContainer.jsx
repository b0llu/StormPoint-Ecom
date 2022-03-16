import { useFilterReducerContext } from "../../../../context/useFilterReducer.context";
import "./SectionContainer.css";

export const SectionContainer = ({ children }) => {
  const { dispatch } = useFilterReducerContext();

  return (
    <section>
      <i
        onClick={() => dispatch({ type: "SIDEBAR" })}
        className="fas fa-bars hamburger stick"
      ></i>
      <div className="section-container">{children}</div>
    </section>
  );
};
