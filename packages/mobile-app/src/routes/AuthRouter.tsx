import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { SignUpScreen } from "@/screens/SignUpScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { TermsScreen } from "@/screens/TermsScreen";
import { PolicyScreen } from "@/screens/PolicyScreen";
import { Colors } from "@/theme/Colors";

const Stack = createNativeStackNavigator();

/**
 * Routing for Pre-Login Screens
 */
export const AuthRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: Colors.black,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Policy" component={PolicyScreen} />
    </Stack.Navigator>
  );
};
