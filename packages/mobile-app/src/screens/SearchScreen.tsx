import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";

/**
 * Screen used for Search
 */
export const SearchScreen = () => {
  return (
    <Flex style={styles.container}>
      <Text>TODO: Search Screen</Text>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
