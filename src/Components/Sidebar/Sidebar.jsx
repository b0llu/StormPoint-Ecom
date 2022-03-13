import "./Sidebar.css";
import { FilterHeader } from "./FilterHeader/FilterHeader";
import { SortFilter } from "./SortFilter/SortFilter";
import { RatingFilter } from "./RatingFilter/RatingFilter";
import { CartegoryFilter } from "./CategoryFilter/CategoryFilter";
import { BrandFilter } from "./BrandFilter/BrandFilter";
import { OtherFilter } from "./OtherFilter/OtherFilter";
// import { useRoute } from "../../Context/useRoute";

export const Sidebar = () => {
  // const { sidebar } = useRoute();

  return (
    <aside>
      <div
        id="sidebar-menu"
        className="sidebar stick position-open"
        // className={`sidebar stick ${
        //   sidebar ? "position-open" : "position-hidden"
        // }`}
      >
        <FilterHeader />
        <ul className="list-style-none filter-section">
          <div className="filter-divider-line"></div>
          <SortFilter />
          <div className="filter-divider-line"></div>
          <RatingFilter />
          <div className="filter-divider-line"></div>
          <CartegoryFilter />
          <div className="filter-divider-line"></div>
          <BrandFilter />
          <div className="filter-divider-line"></div>
          <OtherFilter />
        </ul>
      </div>
    </aside>
  );
};