
import { useDocTitle } from "../../Hook/useTitle";
import {
  CartCardContainer,
  ShowcaseContainer,
  CartCard,
  AmountContainer,
  AmountCard,
} from "./CartComponents/index";

export const CartPage = () => {
  useDocTitle("Cart | StormPoint");

  return (
    <>
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
