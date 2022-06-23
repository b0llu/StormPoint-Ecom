import { useDocTitle } from "../../Hook/useTitle";
import { CardContainer, SectionContainer } from "./ProductComponents/index";
export const ProductPage = () => {
  useDocTitle('Product | StormPoint')

  return (
    <>
      <SectionContainer>
        <CardContainer />
      </SectionContainer>
    </>
  );
};
