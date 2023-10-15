import * as React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { LogoutButton } from "@/components/Buttons";
import { useAuth } from "@/hooks/useAuth";
import { SettingsListItem } from "@/components/Settings/SettingsListItem";
import { noop } from "@/utils/noop";
import { Colors } from "@/theme/Colors";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "@/contexts/AuthContext";
import { ProfileInfo } from "@/components/Profiles/ProfileInfo";

type FIXME = any;
/**
 * Screen used for MyPage Tab of the Main Screen
 */
export const MyPageScreen = () => {
  const { user } = useAuthContext();
  const { logout } = useAuth();
  const navigation = useNavigation<FIXME>();

  const handlePressTerms = React.useCallback(() => {
    navigation.navigate("Terms");
  }, [navigation]);

  const handlePressPolicy = React.useCallback(() => {
    navigation.navigate("Policy");
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileInfo user={user} />
      <View style={styles.settings}>
        <SettingsListItem
          label="Terms and Condition"
          onPress={handlePressTerms}
        />
        <SettingsListItem label="Privacy Policy" onPress={handlePressPolicy} />
      </View>
      <LogoutButton onPress={logout} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  settings: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.border,
  },
  container: {
    gap: 20,
  },
});
