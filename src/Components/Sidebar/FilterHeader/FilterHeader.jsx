// import { useRoute } from "../../../Context/useRoute";

export const FilterHeader = () => {
  // const { sidebar, setSidebar } = useRoute();
  return (
    <div className="title-of-filter">
      {/* {sidebar ? (
        <button
          onClick={() => setSidebar(false)}
          className="link-no-style filter-hover"
        >
          CONFIRM
        </button>
      ) : (
        <button className="link-no-style filter-hover">FILTERS</button>
      )} */}
      <button className="link-no-style filter-hover">FILTERS</button>
      <button className="link-no-style filter-hover underline-primary">
        CLEAR ALL
      </button>
    </div>
  );
};
