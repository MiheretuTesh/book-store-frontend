import { useMutation } from "react-query";

const register = async (user: {
  email: string;
  password: string;
  name: string;
  //   role: string;
}) => {
  const response = await fetch("http://localhost:5000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Registration failed");
  }
  return response.json();
};

export const useRegister = (
  onSuccess: (token: string) => void,
  onError: (error: string) => void
) => {
  return useMutation(register, {
    onSuccess: (data) => {
      onSuccess(data.data.token);
    },
    onError: () => {
      onError("Registration failed. Please try again.");
    },
  });
};
