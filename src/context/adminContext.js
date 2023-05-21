import { useState, createContext, useEffect } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({children}) => {
  const localData = JSON.parse(localStorage.getItem('token'));
  const [adToken, setAdToken] = useState(localData || '');

  useEffect(() => {
    if(adToken) {
      localStorage.setItem('token', JSON.stringify(adToken));
    }
  }, [adToken]);

  return (
    <AdminContext.Provider value={{adToken, setAdToken}}>
      {children}
    </AdminContext.Provider>
  );
};