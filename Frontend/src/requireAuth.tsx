import { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const requireAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default requireAuth;
