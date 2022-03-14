import './FeaturedContainer.css'
import { BrandSection } from './BrandSection/BrandSection';
import { CategorySection } from './CategorySection/CategorySection';

export const FeaturedContainer = () => {
  return (
    <>
      <div className="section-title">
        <h1>Featured Brands</h1>
      </div>
      <div className="underline"></div>
      <BrandSection />
      <div className="section-title">
        <h1>Featured Categories</h1>
      </div>
      <div className="underline"></div>
      <CategorySection />
    </>
  );
};
