import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

const login = async (credentials: { email: string; password: string }) => {
  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const { data } = await response.json();
  return data;
};

export const useLogin = (
  onSuccess: (token: string) => void,
  onError: (error: string) => void
) => {
  const router = useRouter();

  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      onSuccess(data.token);
    },
    onError: (error: any) => {
      onError(error.message);
    },
  });
};
