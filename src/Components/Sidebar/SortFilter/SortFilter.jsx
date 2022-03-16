import { useFilterReducerContext } from "../../../context/useFilterReducer.context";

export const SortFilter = () => {
  const { sort, dispatch } = useFilterReducerContext();

  return (
    <>
      <li className="filter-section-title">Sort by</li>
      <li>
        <label className="form-label">
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
            checked={sort === "High-to-Low"}
          />
          Price High to Low
        </label>
      </li>
      <li>
        <label className="form-label">
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
            checked={sort === "Low-to-High"}
          />
          Price Low to High
        </label>
      </li>
    </>
  );
};
