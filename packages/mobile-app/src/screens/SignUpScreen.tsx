import * as React from "react";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Flex } from "@/components/Utils";
import { PrimaryButton } from "@/components/Buttons";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/Forms/Input";
import { Typography } from "@/components/Typography";
import { KeyboardScreen } from "@/components/Templates/KeyboardScreen";

/**
 * Screen used for signing up
 */
export const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useAuth();
  const onPressSignUp = React.useCallback(() => {
    login("testEmail", "testPassword");
  }, [login]);

  return (
    <KeyboardScreen>
      <Flex style={styles.container}>
        <Flex style={styles.body}>
          <Typography weight="bold">Email</Typography>
          <Input
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="email@example.com"
          />
          <Typography weight="bold">Password</Typography>
          <Input
            value={password}
            secureTextEntry
            placeholder="********"
            onChangeText={setPassword}
          />
        </Flex>
        <PrimaryButton label="Sign Up" onPress={onPressSignUp} />
      </Flex>
    </KeyboardScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  body: {
    gap: 20,
  },
});
