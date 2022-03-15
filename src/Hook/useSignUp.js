import axios from "axios";

export const useSignUp = async () => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      firstName: "Dhruv",
      lastName: "Samant",
      email: "samantdhruv@gmail.com",
      password: "9130609806",
    });
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
  } catch (error) {
    console.log(error);
  }
};
