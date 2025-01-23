import { StyleSheet, View } from "react-native";
import React from "react";
import { ThemedText } from "../../../presentation/theme/components/ThemedText";
import { useThemeColor } from "../../../presentation/theme/hooks/useThemeColor";

const HomeScreen = () => {
  const primary = useThemeColor({}, "primary");

  return (
    <View
      style={{
        paddingTop: 100,
        paddingHorizontal: 20,
      }}
    >
      <ThemedText>HomeScreen</ThemedText>
      <ThemedText style={{ fontFamily: "Kanit-Bold", color: primary }}>
        HomeScreen
      </ThemedText>
      <ThemedText style={styles.fontRegular}>HomeScreen</ThemedText>
      <ThemedText style={styles.fontThin}>HomeScreen</ThemedText>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fontBold: {
    fontFamily: "Kanit-Bold",
  },
  fontRegular: {
    fontFamily: "Kanit-Regular",
  },
  fontThin: {
    fontFamily: "Kanit-Thin",
  },
});
