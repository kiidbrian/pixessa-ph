import { useReducer, ReactNode, useEffect, useState } from "react";
import {
  ActionType,
  AuthContext,
  AuthContextType,
  InitialStateType,
} from "../hooks/useAuth.ts";

import { auth } from "../config/firebase.ts";
import { User, onAuthStateChanged } from "firebase/auth";

const initialState: InitialStateType = {
  isAuthenticated: false,
};

const authReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  // console.log(
  //   "AUTH STATE AT THE AUTH CONTEXT PROVIDER ->",
  //   authState.isAuthenticated
  // );

  const [user, setUser] = useState<User | object | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("CURRENT USER IN AUTH CONTEXT ->", currentUser);
      if (currentUser) {
        dispatch({ type: "LOGIN" });
        setUser(currentUser);
      } else {
        setUser(null);
        dispatch({ type: "LOGOUT" });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // CONTEXT VALUES
  const contextValue: AuthContextType = {
    authState,
    dispatch,
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider };
