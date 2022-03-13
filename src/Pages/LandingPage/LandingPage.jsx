import {
  FeaturedContainer,
  ShowcaseContainer,
  TitleContainer,
} from "./LandingComponents/index";

export const LandingPage = () => {
  return (
    <ShowcaseContainer>
      <TitleContainer />
      <FeaturedContainer />
    </ShowcaseContainer>
  );
};
