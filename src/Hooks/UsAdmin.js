import { useContext } from "react";
import { AdminContext } from "../context/adminContext";

export const UseAdmin = () => {
  const {adToken , setAdToken} = useContext(AdminContext)
  return {adToken , setAdToken}
}