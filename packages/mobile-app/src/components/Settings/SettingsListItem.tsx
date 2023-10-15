import * as React from "react";
import { StyleSheet, View } from "react-native";
import { PressableOpacity, Row } from "../Utils";
import { ChevronRightIcon } from "../Icons";
import { Typography } from "../Typography";
import { Colors } from "@/theme/Colors";

type Props = {
  onPress: () => void;
  label: string;
};
export const SettingsListItem = ({ label, onPress }: Props) => {
  return (
    <PressableOpacity onPress={onPress}>
      <Row
        justifyContent="space-between"
        style={styles.container}
        alignItems="center"
      >
        <Typography>{label}</Typography>
        <ChevronRightIcon />
      </Row>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 16,
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
