import * as React from "react";
import { AuthRouter } from "./AuthRouter";
import { MainRouter } from "./MainRouter";
import { useAuthContext } from "@/contexts/AuthContext";

export const RootRouter = () => {
  const { user } = useAuthContext();

  return user ? <MainRouter /> : <AuthRouter />;
};
