import * as React from "react";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
  color?: string;
};

export const HomeIcon = ({ size = 32, color = Colors.black }: Props) => {
  return <MaterialIcon name="home" size={size} color={color} />;
};
