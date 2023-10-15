import * as React from "react";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
  color?: string;
};

export const SearchIcon = ({ size = 32, color = Colors.black }: Props) => {
  return <MaterialIcon name="search" size={size} color={color} />;
};
