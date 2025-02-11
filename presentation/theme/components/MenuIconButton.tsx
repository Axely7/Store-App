import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
}

const MenuIconButton = ({ onPress, icon }: Props) => {
  return (
    <TouchableOpacity>
      <Ionicons name={icon} size={24} />
    </TouchableOpacity>
  );
};

export default MenuIconButton;
