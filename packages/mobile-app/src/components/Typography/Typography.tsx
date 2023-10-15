import { Colors } from "@/theme/Colors";
import * as React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  size?: number;
  color?: string;
  weight?: "bold" | "regular" | "light";
} & Text["props"];
export const Typography = ({
  weight,
  size = 16,
  color = Colors.black,
  style,
  ...rest
}: Props) => {
  return (
    <Text
      style={[styles[weight ?? "regular"], { color, fontSize: size }, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  light: {
    fontWeight: "300",
  },
  regular: {
    fontWeight: "400",
  },
  bold: {
    fontWeight: "600",
  },
});
