import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";
import { PressableOpacity } from "../Utils";

type Props = {
  onPress: () => void;
  label: string;
};
export const PrimaryButton = ({ onPress, label }: Props) => {
  return (
    <PressableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    backgroundColor: Colors.primary,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.white,
    fontWeight: "600",
  },
});
