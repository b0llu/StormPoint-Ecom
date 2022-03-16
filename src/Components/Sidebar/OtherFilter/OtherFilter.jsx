import { useFilterReducerContext } from "../../../context/useFilterReducer.context";

export const OtherFilter = () => {
  const { outOfStock, dispatch } = useFilterReducerContext();
  return (
    <>
      <li className="filter-section-title">Other</li>
      <li>
        <label className="form-label">
          <input
            type="checkbox"
            checked={outOfStock}
            onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
          />
          Include out of stock
        </label>
      </li>
    </>
  );
};
