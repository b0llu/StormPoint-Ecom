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
