import * as React from "react";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
  color?: string;
};

export const UserIcon = ({ size = 32, color = Colors.black }: Props) => {
  return (
    <Ionicon
      name="person-sharp"
      size={size}
      color={color}
      style={{ textAlign: "center" }}
    />
  );
};
