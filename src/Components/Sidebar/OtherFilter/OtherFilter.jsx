// import { useEcom } from "../../../Context/useEcomReducer.context";

export const OtherFilter = () => {
  // const { dispatch, outOfStock } = useEcom();
  return (
    <>
      <li className="filter-section-title">Other</li>
      <li>
        <label className="form-label">
          <input
            type="checkbox"
            // checked={outOfStock}
            // onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
          />
          Include out of stock
        </label>
      </li>
    </>
  );
};
