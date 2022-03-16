import { useFilterReducerContext } from "../../../context/useFilterReducer.context";

export const FilterHeader = () => {
  const { sidebar, dispatch } = useFilterReducerContext();

  return (
    <div className="title-of-filter">
      {sidebar ? (
        <button
          onClick={() => dispatch({ type: "SIDEBAR" })}
          className="link-no-style filter-hover"
        >
          CONFIRM
        </button>
      ) : (
        <button className="link-no-style filter-hover">FILTERS</button>
      )}
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="link-no-style filter-hover underline-primary"
      >
        CLEAR ALL
      </button>
    </div>
  );
};
