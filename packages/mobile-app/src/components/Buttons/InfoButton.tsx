import { Colors } from "@/theme/Colors";
import * as React from "react";
import { StyleSheet } from "react-native";
import { InfoIcon } from "../Icons";
import { PressableOpacity } from "../Utils";

type Props = {
  onPress: () => void;
};
export const InfoButton = ({ onPress }: Props) => {
  return (
    <PressableOpacity onPress={onPress} style={styles.container}>
      <InfoIcon size={16} color={Colors.primary} />
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
  },
});
