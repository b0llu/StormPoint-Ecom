import { Toast } from "../../Components";
import { useDocTitle } from "../../Hook/useTitle";
import {
  WishlistCard,
  WishlistCardContainer,
} from "./WishlistComponents";

export const WishlistPage = () => {
  useDocTitle("Wishlist | StormPoint");
  return (
    <>
      <Toast />
      <WishlistCardContainer>
        <WishlistCard />
      </WishlistCardContainer>
    </>
  );
};
