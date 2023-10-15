import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { noop } from "@/utils/noop";
import { Colors } from "@/theme/Colors";
import { Article } from "@/types";
import { ArticleListItem } from "./ArticleListItem";
import { ArticleTopListItem } from "./ArticleTopListItem";

type Props = {
  data: Article[];
  onSelect: (id: string) => void;
};
export const ArticleList = ({ data, onSelect }: Props) => {
  const topArticle = data[0];

  const renderHeader = React.useCallback(() => {
    if (!topArticle) return null;
    return <ArticleTopListItem article={topArticle} onPress={onSelect} />;
  }, [topArticle]);

  const renderItem = React.useCallback(
    ({ item }) => <ArticleListItem article={item} onPress={onSelect} />,
    [],
  );

  const restArticle = React.useMemo(() => {
    if (!topArticle) return data;
    return data.slice(1);
  }, [topArticle, data]);

  return (
    <FlatList
      data={restArticle}
      style={styles.container}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
