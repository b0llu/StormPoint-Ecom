import axios from "axios";

export const useTokenChecker = async () => {
  const encodedToken = localStorage.getItem("token");
  try {
    const { data } = await axios.post("/api/auth/verify", {
      encodedToken: encodedToken,
    });
  } catch (error) {}
};
