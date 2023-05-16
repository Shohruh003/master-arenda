import { useState, createContext, useEffect } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({children}) => {
  const localData = JSON.parse(localStorage.getItem('token'));
  const [token, setToken] = useState(localData || '');

  useEffect(() => {
    if(token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <HomeContext.Provider value={{token, setToken}}>
      {children}
    </HomeContext.Provider>
  );
};