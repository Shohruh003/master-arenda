import { useContext } from "react";
import { HomeContext } from "../context/homeContext";

export const UseAuth = () => {
  const {token , setToken} = useContext(HomeContext)
  return {token , setToken}
}