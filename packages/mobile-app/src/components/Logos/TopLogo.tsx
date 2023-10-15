import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TopLogo = () => {
  return (
    <View>
      <Text style={styles.logoText}>Logo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 56,
    fontWeight: "600",
    textAlign: "center",
  },
});
