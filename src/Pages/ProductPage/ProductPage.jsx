import { useState } from "react";
import { Toast } from "../../Components";
import { CardContainer, SectionContainer } from "./ProductComponents/index";
export const ProductPage = () => {
  return (
    <>
      <Toast />
      <SectionContainer>
        <CardContainer />
      </SectionContainer>
    </>
  );
};
