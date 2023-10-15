import * as React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

/**
 * Screen used for displaying terms and conditions
 */
export const TermsScreen = () => {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        html: "<h1>Terms and Conditions</h1><p>Our Terms and Conditions are very simple. We do not collect any data from you.</p><p>That is all.</p>",
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
