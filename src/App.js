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

function App() {
  return (
    <>
      <LandingContainer>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/Products"
            element={
              <ProductContainer>
                <Sidebar />
                <ProductPage />
              </ProductContainer>
            }
          />
        </Routes>
      </LandingContainer>
    </>
  );
}

export default App;
