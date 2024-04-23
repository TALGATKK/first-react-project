import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  username: "",
  password: "",
  isLoggedIn: false,
  login: undefined,
  setIsLoggedIn: undefined,
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const login = (userData) => {
    if (userData.username === "admin" && userData.password === "123") {
      setIsLoggedIn(true);
      setUser(userData);
      navigate("/");
    } else {
      alert("Некорректные учетные данные!!!");
    }
  };

  return (
    <AuthContext.Provider value={{ ...user, isLoggedIn, setIsLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
}
