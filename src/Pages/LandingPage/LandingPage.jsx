import axios from "axios";
import { useEffect } from "react";
import { useCartContext } from "../../context/Cart.context";
import { useWishlistContext } from "../../context/Wishlist.context";
import { useDocTitle } from "../../Hook/useTitle";
import {
  FeaturedContainer,
  ShowcaseContainer,
  TitleContainer,
} from "./LandingComponents/index";

export const LandingPage = () => {
  useDocTitle("Home | StormPoint");
  return (
    <ShowcaseContainer>
      <TitleContainer />
      <FeaturedContainer />
    </ShowcaseContainer>
  );
};
