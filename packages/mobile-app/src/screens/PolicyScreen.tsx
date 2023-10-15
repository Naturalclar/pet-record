import * as React from "react";
import { Text, StyleSheet } from "react-native";

import WebView from "react-native-webview";

/**
 * Screen used for displaying privacy policy
 */
export const PolicyScreen = () => {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        html: "<h1>Privacy Policy</h1><p>Our Privacy Policy is very simple. We do not collect any data from you.</p><p>That is all.</p>",
      }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
