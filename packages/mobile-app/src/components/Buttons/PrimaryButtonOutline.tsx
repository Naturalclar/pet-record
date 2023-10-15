import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";
import { PressableOpacity } from "../Utils";

type Props = {
  onPress: () => void;
  label: string;
  backgroundColor?: string;
};
export const PrimaryButtonOutline = ({
  onPress,
  backgroundColor,
  label,
}: Props) => {
  return (
    <PressableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary,
    fontWeight: "600",
  },
});
