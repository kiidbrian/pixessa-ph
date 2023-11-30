import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { user } = useAuth();
  console.log("Auth STATE in Protected Route -> ", user);

  return !user ? <Navigate to="login" replace={true} /> : <Outlet />;
};

export default ProtectedRoute;
