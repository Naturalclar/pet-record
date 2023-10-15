import * as React from "react";
import { StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { KeyboardScreen } from "@/components/Templates/KeyboardScreen";
import { Typography } from "@/components/Typography";
import { Input } from "@/components/Forms/Input";
import { PrimaryButton } from "@/components/Buttons";
import { useAuth } from "@/hooks/useAuth";

/**
 * Screen used for logging in to already existing account
 */
export const LoginScreen = () => {
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
        <PrimaryButton label="Log in" onPress={onPressSignUp} />
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
