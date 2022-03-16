import "./Sidebar.css";
import { FilterHeader } from "./FilterHeader/FilterHeader";
import { SortFilter } from "./SortFilter/SortFilter";
import { RatingFilter } from "./PriceFilter/PriceFilter";
import { CartegoryFilter } from "./CategoryFilter/CategoryFilter";
import { BrandFilter } from "./BrandFilter/BrandFilter";
import { OtherFilter } from "./OtherFilter/OtherFilter";
import { useFilterReducerContext } from "../../context/useFilterReducer.context";

export const Sidebar = () => {
  const { sidebar } = useFilterReducerContext();

  return (
    <aside>
      <div
        id="sidebar-menu"
        className={`sidebar stick ${
          sidebar ? "position-open" : "position-hidden"
        }`}
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
