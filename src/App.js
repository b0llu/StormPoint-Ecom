import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import {
  Footer,
  Header,
  Sidebar,
  ProductContainer,
  LandingContainer,
  Toast,
} from "./Components/index";
import { Routes, Route } from "react-router-dom";
import MockAPI from "./Mockman";
import { CartPage } from "./Pages/Cart/CartPage";
import { WishlistPage } from "./Pages/WIshlist/WishlistPage";
import { DashboardPage } from "./Pages/DashboardPage/DashboardPage";
import {
  AuthContainer,
  LoginBox,
  SignupBox,
} from "./Pages/AuthPage/ProfileComponents";
import RestrictAuth from "./Components/RequireAuth/RestrictAuth";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <LandingContainer>
        <Header />
        <Toast />
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
          <Route element={<RequireAuth />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route element={<RestrictAuth />}>
            <Route
              path="/login"
              element={
                <AuthContainer>
                  <LoginBox />
                </AuthContainer>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthContainer>
                  <SignupBox />
                </AuthContainer>
              }
            />
          </Route>
          <Route path="mockman" element={<MockAPI />} />
        </Routes>
        <Footer />
      </LandingContainer>
    </>
  );
}

export default App;
