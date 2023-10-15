import * as React from "react";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
  color?: string;
};

export const NotificationIcon = ({
  size = 32,
  color = Colors.black,
}: Props) => {
  return (
    <MaterialCommunityIcon name="bell-outline" size={size} color={color} />
  );
};
