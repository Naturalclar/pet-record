import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "./ListItem";
import { noop } from "@/utils/noop";
import { Colors } from "@/theme/Colors";

type Data = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  data?: Data[];
  onSelect: (id: string) => void;
};
export const List = ({ data = [], onSelect }: Props) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={({ item }) => (
        <ListItem
          id={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          onPress={onSelect}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
