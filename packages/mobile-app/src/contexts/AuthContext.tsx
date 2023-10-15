import * as React from "react";
import type { User } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContext = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AuthContext = React.createContext<AuthContext>({
  user: null,
  setUser: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const useAuthContext = () => {
  const { user, setUser } = React.useContext(AuthContext);
  return { user, setUser };
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        setUser(JSON.parse(user) as User);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
