import * as React from "react";
import { ActivityIndicator } from "react-native";
import { Flex } from "../Utils";
import { Colors } from "@/theme/Colors";

/**
 * Template Screen for displaying a loading Screen
 */
export const LoadingScreen = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <ActivityIndicator size="large" color={Colors.primary} />
    </Flex>
  );
};
