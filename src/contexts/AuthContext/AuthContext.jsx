import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";


const initialState = {
  isAuthorized: false,
  authHash: "",
  authorizedDate: new Date(),
  expirey: 5000  
}

export const AuthContext = createContext();

export const AuthStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}