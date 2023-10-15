import { Colors } from "@/theme/Colors";
import * as React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  children: React.ReactNode;
};

export const LinkText = ({ onPress, children }: Props) => {
  return (
    <Text style={styles.text} onPress={onPress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.link,
    fontWeight: "600",
  },
});
