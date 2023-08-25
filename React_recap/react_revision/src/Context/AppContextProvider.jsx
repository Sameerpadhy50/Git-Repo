import React, { createContext, useState } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const login = (token) => {
    setAuth(true);
    setToken(token);
  };
  const logout = () => {
    setAuth(false);
    setToken("");
  };

  return (
    <AppContext.Provider value={{ auth, token, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
