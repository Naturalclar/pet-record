import { useAuthContext } from "@/contexts/AuthContext";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@/types";

export const useAuth = () => {
  const { setUser } = useAuthContext();
  const login = useCallback(
    async (_email: string, _password: string) => {
      const user: User = { name: "test user" };
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    },
    [setUser],
  );

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  }, [setUser]);

  return {
    login,
    logout,
  };
};
