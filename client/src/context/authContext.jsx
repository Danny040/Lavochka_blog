// because a user info is necessary in many components it's gonna be stored in createContext (redux also can be used)
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

// children are components that are wrapped in authcontextprovider
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setCurrentUser(res.data);
  };
  const logout = async () => {
    await axios.post("http://localhost:8800/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setCurrentUser(null);
  };

  //updating localstorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={
        { currentUser, login, logout } // these values can be used everywhere in the app
      }
    >
      {children}
    </AuthContext.Provider>
  );
};
