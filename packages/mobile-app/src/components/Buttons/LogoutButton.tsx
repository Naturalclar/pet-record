import * as React from "react";
import { StyleSheet } from "react-native";
import { Typography } from "../Typography";
import { Colors } from "@/theme/Colors";
import { PressableOpacity } from "../Utils";

type Props = {
  onPress: () => void;
};
export const LogoutButton = ({ onPress }: Props) => {
  return (
    <PressableOpacity onPress={onPress} style={styles.container}>
      <Typography style={styles.text} color={Colors.primary} weight="bold">
        Logout
      </Typography>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 16,
  },
  text: {
    textAlign: "center",
  },
});
