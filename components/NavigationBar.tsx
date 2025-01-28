import React from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "../context/ThemeContext";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

const NavigationBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : null;

  const logoutMutation = useMutation(
    () => {
      return new Promise<void>((resolve) => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        resolve();
      });
    },
    {
      onSuccess: () => {
        router.push("/");
      },
    }
  );

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      } shadow-md py-4 fixed w-full top-0 z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Book Store
        </div>
        <div className="space-x-6 flex items-center">
          {token ? (
            <>
              {role === "admin" && (
                <a
                  href="/add-book"
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } hover:text-gray-500 transition duration-300`}
                >
                  Add Book
                </a>
              )}
              <a
                href="/saved"
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } hover:text-gray-500 transition duration-300`}
              >
                Saved
              </a>
              <button
                onClick={handleLogout}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="#"
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } hover:text-gray-500 transition duration-300`}
              >
                Home
              </a>
              <a
                href="#"
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } hover:text-gray-500 transition duration-300`}
              >
                New Arrivals
              </a>
              <a
                href="#"
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } hover:text-gray-500 transition duration-300`}
              >
                Best Sellers
              </a>
              <a
                href="#"
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } hover:text-gray-500 transition duration-300`}
              >
                Featured
              </a>
              <a
                href="#"
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } hover:text-gray-500 transition duration-300`}
              >
                Contact
              </a>
              <button
                onClick={() => (window.location.href = "/login")}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Login
              </button>
              <button
                onClick={() => (window.location.href = "/register")}
                className="bg-gray-100 text-gray-700 border-2 border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                Sign Up
              </button>
            </>
          )}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-gray-100 text-gray-700 border-2 border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center"
          >
            {theme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
