import * as React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { Row, Flex, PressableOpacity } from "@/components/Utils";

type Props = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  onPress: (id: string) => void;
};

export const ListItem = ({
  id,
  title,
  description,
  imageUrl,
  onPress,
}: Props) => {
  const handleSelect = React.useCallback(() => {
    onPress(id);
  }, [id, onPress]);
  return (
    <PressableOpacity onPress={handleSelect}>
      <Row style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Flex>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </Flex>
      </Row>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  container: {
    padding: 12,
    gap: 10,
  },
});
