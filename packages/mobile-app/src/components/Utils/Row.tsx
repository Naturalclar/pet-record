import * as React from "react";
import { View, StyleSheet, type ViewProps, type FlexStyle } from "react-native";

type Props = {
  justifyContent?: FlexStyle["justifyContent"];
  alignItems?: FlexStyle["alignItems"];
} & ViewProps;
export const Row = ({ style, justifyContent, alignItems, ...rest }: Props) => {
  return (
    <View
      style={[styles.default, { justifyContent, alignItems }, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  default: { flexDirection: "row" },
});
