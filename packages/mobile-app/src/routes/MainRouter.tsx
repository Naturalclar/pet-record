import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "@/theme/Colors";
import { PressableOpacity, Row } from "@/components/Utils";
import { useNavigation } from "@react-navigation/native";
import { NotificationScreen } from "@/screens/NotificationScreen";
import { SearchScreen } from "@/screens/SearchScreen";
import {
  ChartIcon,
  HomeIcon,
  NotificationIcon,
  RecordIcon,
  SearchIcon,
  UserIcon,
} from "@/components/Icons";
import { MyPageRouter } from "./MyPageRouter";
import { HomeRouter } from "./HomeRouter";
import { DataRouter } from "./DataRouter";
import { RecordRouter } from "./RecordRouter";
import { ArticleDetailScreen } from "@/screens/ArticleDetailScreen";

const Stack = createNativeStackNavigator();

/**
 * Routing for Post-Login Screens
 */
export const MainRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: Colors.black,
      }}
    >
      <Stack.Screen
        name="Main"
        options={{ headerShown: false }}
        component={MainTab}
      />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
      <Stack.Screen name="NotificationDetail" component={ArticleDetailScreen} />
      {/**
       * Modal Screens
       */}
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={({ navigation }) => ({
          headerRight: () => <Text onPress={navigation.goBack}>Cancel</Text>,
          presentation: "modal",
        })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          headerRight: () => <Text onPress={navigation.goBack}>Cancel</Text>,
          presentation: "modal",
        })}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

type FIXME = any;

export const useHeaderRight = () => {
  const navigation = useNavigation<FIXME>();

  const handlePressNotification = React.useCallback(() => {
    navigation.navigate("Notification");
  }, [navigation]);
  const handlePressSearch = React.useCallback(() => {
    navigation.navigate("Search");
  }, [navigation]);

  const headerRight = React.useCallback(() => {
    return (
      <Row style={styles.rightOptions}>
        <PressableOpacity onPress={handlePressSearch}>
          <SearchIcon size={24} color={Colors.black} />
        </PressableOpacity>
        <PressableOpacity onPress={handlePressNotification}>
          <NotificationIcon size={24} color={Colors.black} />
        </PressableOpacity>
      </Row>
    );
  }, [handlePressNotification, handlePressSearch]);

  return headerRight;
};

const MainTab = () => {
  const headerRight = useHeaderRight();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeRouter}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),

          title: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DataTab"
        component={DataRouter}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ChartIcon color={color} size={size} />
          ),
          headerShown: false,
          title: "Data",
        }}
      />
      <Tab.Screen
        name="RecordTab"
        component={RecordRouter}
        options={{
          tabBarIcon: ({ color, size }) => (
            <RecordIcon color={color} size={size} />
          ),
          headerShown: false,
          title: "Record",
        }}
      />
      <Tab.Screen
        name="MyPageTab"
        component={MyPageRouter}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          ),
          headerShown: false,
          title: "MyPage",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  rightOptions: {
    gap: 20,
  },
});
