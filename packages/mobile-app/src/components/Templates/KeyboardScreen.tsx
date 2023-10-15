import * as React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  Keyboard,
  Platform,
} from "react-native";

type Props = KeyboardAvoidingView["props"];

/**
 * Template Screen for screen that requires keyboard input
 */
export const KeyboardScreen = ({ children, ...rest }: Props) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={100}
      {...rest}
    >
      <Pressable
        disabled={Platform.OS === "web"}
        style={styles.container}
        onPress={Keyboard.dismiss}
      >
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
