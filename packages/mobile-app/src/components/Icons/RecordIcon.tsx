import * as React from "react";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/theme/Colors";

type Props = {
  size?: number;
  color?: string;
};

export const RecordIcon = ({ size = 32, color = Colors.black }: Props) => {
  return (
    <MaterialCommunityIcon
      name="file-document-edit-outline"
      size={size}
      color={color}
    />
  );
};
