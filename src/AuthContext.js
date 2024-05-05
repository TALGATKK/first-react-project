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
  async function getUsers() {
    try {
      const response = await fetch(
        "https://mocki.io/v1/a9423ca3-cf7c-4d18-bba2-a3329a7ea6c2"
      );
      const usersJson = await response.json();
      setUser(usersJson);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  getUsers();

  const login = (userData) => {
    var isUser = false;
    for (let i = 0; i < user.length; i++) {
      if (
        userData.username === user[i].username &&
        userData.password === user[i].password
      ) {
        setIsLoggedIn(true);
        isUser = true;
        navigate("/");
      }
    }

    if (isUser === false) {
      alert("Некорректные учетные данные!!!");
    }
  };

  return (
    <AuthContext.Provider value={{ ...user, isLoggedIn, setIsLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
}
