import * as React from "react";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
  color?: string;
};

export const InfoIcon = ({ size = 32, color = Colors.black }: Props) => {
  return <Ionicon name="md-information" size={size} color={color} />;
};
