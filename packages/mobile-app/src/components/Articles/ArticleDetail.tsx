import * as React from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import type { Article } from "@/types";
import { Typography } from "../Typography";
import { Colors } from "@/theme/Colors";

type Props = {
  article: Article;
};

export const ArticleDetail = ({ article }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: article.imageUrl }} style={styles.image} />
      <View style={styles.body}>
        <Typography weight="bold" size={24}>
          {article.title}
        </Typography>
        <Typography size={16}>{article.description}</Typography>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: Colors.white,
  },
  image: {
    height: 300,
    width: "100%",
  },
  body: {
    padding: 16,
    gap: 16,
  },
});
