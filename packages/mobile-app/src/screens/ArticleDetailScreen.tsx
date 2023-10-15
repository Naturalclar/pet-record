import * as React from "react";
import { StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import * as api from "@/apis";
import { useRoute } from "@react-navigation/native";
import { LoadingScreen } from "@/components/Templates/LoadingScreen";
import { ArticleDetail } from "@/components/Articles/ArticleDetail";

type FIXME = any;

/**
 * Screen used for Article Detail
 */
export const ArticleDetailScreen = () => {
  const { params } = useRoute<FIXME>();
  const { isLoading, data } = useQuery({
    queryKey: ["article", params.id],
    queryFn: () => api.fetchArticleById(params.id),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <ArticleDetail article={data.data} />;
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
