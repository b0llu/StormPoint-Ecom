import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/Auth.context";

const RestrictAuth = () => {
  const { userState } = useAuthContext();
  const location = useLocation();
  return userState.id ? (
    <Navigate
      to={location.state !== null ? location.state.from.pathname : "/"}
      state={{ from: location }}
      replace
    />
  ) : (
    <Outlet />
  );
};

export default RestrictAuth;
