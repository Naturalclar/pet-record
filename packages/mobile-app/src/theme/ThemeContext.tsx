import * as React from "react";
import { Colors } from "@/theme/Colors";

type Theme = typeof Colors;
type ThemeContext = Theme & { isSet: boolean };
const ThemeContext = React.createContext<ThemeContext>({
  ...Colors,
  isSet: false,
});

export const useColors = () => {
  const theme = React.useContext(ThemeContext);

  if (!theme.isSet) {
    throw new Error(
      "Theme is not provided. Please wrap your app with <ThemeProvider>",
    );
  }

  return React.useContext(ThemeContext);
};

type Props = {
  theme: Theme;
  children: React.ReactNode;
};
export const ThemeProvider = ({ theme, children }: Props) => {
  const appTheme: ThemeContext = React.useMemo(
    () => ({ ...theme, isSet: true }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};
