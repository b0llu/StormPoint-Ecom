import { Toast } from "../../Components";
import {
  CartCardContainer,
  ShowcaseContainer,
  CartCard,
  AmountContainer,
  AmountCard,
} from "./CartComponents/index";

export const CartPage = () => {
  return (
    <>
      <Toast />
      <CartCardContainer>
        <>
          <ShowcaseContainer>
            <CartCard />
          </ShowcaseContainer>
          <AmountContainer>
            <AmountCard />
          </AmountContainer>
        </>
      </CartCardContainer>
    </>
  );
};
