import * as React from "react";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
  color?: string;
};

export const ChartIcon = ({ size = 32, color = Colors.black }: Props) => {
  return <Ionicon name="ios-bar-chart-sharp" size={size} color={color} />;
};
