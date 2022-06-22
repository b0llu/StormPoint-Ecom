import { useFilterReducerContext } from "../../../context/FilterReducer.context";

export const RatingFilter = () => {
  const { price, dispatch } = useFilterReducerContext();

  return (
    <>
      <li className="filter-section-title">Price</li>
      <div className="rating">
        <label className="slider-label">
          <span>0</span>
          <span>To</span>
          <span>{price}</span>
        </label>
        <input
          className="slider"
          type="range"
          min="1000"
          step="1000"
          max="100000"
          value={price}
          onChange={(e) =>
            dispatch({ type: "SLIDER", payload: Number(e.target.value) })
          }
        />
      </div>
    </>
  );
};
