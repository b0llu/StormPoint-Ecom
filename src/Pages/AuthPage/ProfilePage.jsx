import { AuthContainer, LoginBox, SignupBox } from "./ProfileComponents/ProfileComponents";

export const ProfilePage = () => {
  return (
    <AuthContainer>
      {forAuth === "Login" ? <LoginBox /> : <SignupBox />}
    </AuthContainer>
  );
};
