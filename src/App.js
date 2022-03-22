import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import {
  Footer,
  Header,
  Sidebar,
  ProductContainer,
  LandingContainer,
} from "./Components/index";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./Mockman";
import { CartPage } from "./Pages/Cart/CartPage";
import { WishlistPage } from "./Pages/WIshlist/WishlistPage";

function App() {
  return (
    <>
      <LandingContainer>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            element={
              <ProductContainer>
                <Sidebar />
                <ProductPage />
              </ProductContainer>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="mockman" element={<MockAPI />} />
        </Routes>
        <Footer />
      </LandingContainer>
    </>
  );
}

export default App;
