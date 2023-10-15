import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import {
  PrimaryButton,
  PrimaryButtonOutline,
  InfoButton,
} from "@/components/Buttons";
import { noop } from "@/utils/noop";
import { Flex, Row } from "@/components/Utils";
import { LinkText } from "@/components/Typography/LinkText";
import { TopLogo } from "@/components/Logos";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/theme/Colors";

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1506634064465-7dab4de896ed";

// TODO: use navigation param type
type FIXME = any;

export const WelcomeScreen = () => {
  const navigation = useNavigation<FIXME>();

  const handlePressSignUp = React.useCallback(() => {
    navigation.navigate("SignUp");
  }, [navigation]);

  const handlePressLogin = React.useCallback(() => {
    navigation.navigate("Login");
  }, [navigation]);

  const handlePressTerms = React.useCallback(() => {
    navigation.navigate("Terms");
  }, [navigation]);

  const handlePressPolicy = React.useCallback(() => {
    navigation.navigate("Policy");
  }, [navigation]);

  return (
    <Flex>
      <ImageBackground
        source={{ uri: backgroundImageUrl }}
        style={styles.background}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Flex style={styles.logoContainer}>
            <TopLogo />
          </Flex>
          <Flex style={styles.buttonsContainer}>
            <Text style={styles.agreeText}>
              Agree to our <LinkText onPress={handlePressTerms}>Terms</LinkText>
              {` and `}
              <LinkText onPress={handlePressPolicy}>Privacy Policy</LinkText>.
            </Text>
            <PrimaryButton label="Sign Up" onPress={handlePressSignUp} />
            <PrimaryButtonOutline
              backgroundColor={Colors.white}
              label="Log In"
              onPress={handlePressLogin}
            />
            <Row justifyContent="flex-end">
              <InfoButton onPress={noop} />
            </Row>
          </Flex>
        </View>
      </SafeAreaView>
    </Flex>
  );
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
  logoContainer: {
    justifyContent: "center",
  },
  agreeText: {
    textAlign: "center",
  },
  safeArea: { flex: 1 },
  container: { padding: 24, flex: 1, gap: 20 },
  buttonsContainer: {
    gap: 24,
    padding: 24,
  },
});
