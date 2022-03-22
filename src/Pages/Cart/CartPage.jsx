
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
