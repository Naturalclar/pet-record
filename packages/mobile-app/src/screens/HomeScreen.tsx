import * as React from "react";
import { Flex } from "@/components/Utils";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/apis";
import { LoadingScreen } from "@/components/Templates/LoadingScreen";
import { ArticleList } from "@/components/Articles/ArticleList";
import { useNavigation } from "@react-navigation/native";

type FIXME = any;
/**
 * Screen used for Home Tab of the Main Screen
 */
export const HomeScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["articles"],
    queryFn: () => api.fetchArticles(),
  });

  const navigation = useNavigation<FIXME>();
  const handleNavigateToDetail = React.useCallback((id: string) => {
    navigation.navigate("ArticleDetail", { id });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Flex>
      <ArticleList data={data.data} onSelect={handleNavigateToDetail} />
    </Flex>
  );
};
