import * as React from "react";
import { StyleSheet } from "react-native";
import { Flex } from "@/components/Utils";
import { List } from "@/components/Lists/List";
import { LoadingScreen } from "@/components/Templates/LoadingScreen";
import * as api from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

type FIXME = any;
/**
 * Screen used for Notification on Top Right
 */
export const NotificationScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["notificatons"],
    queryFn: () => api.fetchNotifications(),
  });

  const navigation = useNavigation<FIXME>();
  const handleNavigateToDetail = React.useCallback((id: string) => {
    navigation.navigate("NotificationDetail", { id });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Flex style={styles.container}>
      <List data={data.data} onSelect={handleNavigateToDetail} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {},
});
