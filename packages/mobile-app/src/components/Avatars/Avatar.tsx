import * as React from "react";
import { StyleSheet } from "react-native";
import { Row } from "@/components/Utils";
import { UserIcon } from "@/components/Icons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
};
export const Avatar = ({ size = 32 }: Props) => {
  return (
    <Row
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
      justifyContent="center"
      alignItems="center"
    >
      <UserIcon size={(size * 2) / 3} color={Colors.text.light} />
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.light,
  },
});
