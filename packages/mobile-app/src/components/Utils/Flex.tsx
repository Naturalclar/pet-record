import * as React from "react";
import { View, StyleSheet, ViewProps, FlexStyle } from "react-native";

type Props = {
  justifyContent?: FlexStyle["justifyContent"];
  alignItems?: FlexStyle["alignItems"];
} & ViewProps;
export const Flex = ({ style, justifyContent, alignItems, ...rest }: Props) => {
  return (
    <View
      style={[styles.default, { justifyContent, alignItems }, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  default: { flex: 1 },
});
