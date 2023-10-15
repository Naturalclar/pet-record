import { Colors } from "@/theme/Colors";
import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {} & TextInput["props"];

export const Input = ({ ...rest }: Props) => {
  return <TextInput style={styles.input} {...rest} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    padding: 10,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
});
