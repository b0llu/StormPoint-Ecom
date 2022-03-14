import { LandingPage } from "./Pages/LandingPage/LandingPage";
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
        </Routes>
      </LandingContainer>
    </>
  );
}

export default App;
