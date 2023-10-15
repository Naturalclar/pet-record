import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Colors } from "@/theme/Colors";
import { useHeaderRight } from "./MainRouter";
import { HomeScreen } from "@/screens/HomeScreen";

const Stack = createNativeStackNavigator();

/**
 * Routing for DataTab Screens
 */
export const DataRouter = () => {
  const headerRight = useHeaderRight();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: Colors.black,
        headerRight,
      }}
    >
      <Stack.Screen name="Data" component={HomeScreen} />
    </Stack.Navigator>
  );
};
