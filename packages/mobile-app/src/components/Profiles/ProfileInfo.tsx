import { User } from "@/types";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "../Avatars";
import { Typography } from "../Typography";
import { Row } from "../Utils";
import { Colors } from "@/theme/Colors";

type Props = {
  user: User;
};
export const ProfileInfo = ({ user }: Props) => {
  return (
    <Row style={styles.container}>
      <Avatar size={64} />
      <View style={styles.body}>
        <Typography color={Colors.white}>{user.name}</Typography>
      </View>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.dark,
    gap: 16,
    padding: 16,
  },
  body: {
    justifyContent: "center",
  },
});
