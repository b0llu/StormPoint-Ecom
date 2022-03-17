import { Toast } from "../../Components";
import {
  WishlistCard,
  WishlistCardContainer,
} from "./WishlistComponents";

export const WishlistPage = () => {
  return (
    <>
      <Toast />
      <WishlistCardContainer>
        <WishlistCard />
      </WishlistCardContainer>
    </>
  );
};
