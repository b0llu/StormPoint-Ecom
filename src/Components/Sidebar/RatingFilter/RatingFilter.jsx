// import { useEcom } from "../../../Context/useEcomReducer.context";

export const RatingFilter = () => {
  // const { price, dispatch } = useEcom();
  return (
    <>
      <li className="filter-section-title">Price</li>
      <div className="rating">
        <label className="slider-label">
          <span>9000</span>
          <span>325000</span>
        </label>
        <input
          className="slider"
          type="range"
          min="9000"
          step="10000"
          max="325000"
          // value={price}
          // onChange={(e) =>
          //   dispatch({ type: "SLIDER", payload: Number(e.target.value) })
          // }
        />
      </div>
    </>
  );
};
