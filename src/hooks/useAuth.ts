import { User } from "firebase/auth";
import { useContext, createContext } from "react";

import { Dispatch } from "react";

export type InitialStateType = {
  isAuthenticated: boolean;
};

export type ActionType = {
  type: "LOGIN" | "LOGOUT";
};

export type AuthContextType = {
  authState: InitialStateType;
  dispatch: Dispatch<ActionType>;
  user: object | User | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("Context in useAuth ->", context);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
