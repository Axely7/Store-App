import {
  View,
  Text,
  ButtonProps,
  PressableProps,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props extends PressableProps {
  icon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

const ThemedButton = ({ icon, children, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <Pressable
      style={{
        backgroundColor: primaryColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        paddingVertical: 10,
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        {children}
      </Text>
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={"white"}
          style={{ marginLeft: 5 }}
        />
      )}
    </Pressable>
  );
};

export default ThemedButton;
