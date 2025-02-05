import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/presentation/theme/components/ThemedView";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import { useProduct } from "../../../presentation/products/hooks/useProduct";

const ProductScreen = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const { productQuery } = useProduct(`${id}`);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="camera-outline" size={25} />,
    });
  }, []);

  if (productQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView>
        <ThemedView style={{ marginHorizontal: 10, marginTop: 20 }}>
          <ThemedTextInput placeholder="Título" style={{ marginVertical: 5 }} />
          <ThemedTextInput placeholder="Slug" style={{ marginVertical: 5 }} />
          <ThemedTextInput
            multiline
            placeholder="Descripción"
            numberOfLines={5}
            style={{ marginVertical: 5 }}
          />
        </ThemedView>
        <ThemedView
          style={{
            marginHorizontal: 10,
            marginVertical: 5,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <ThemedTextInput placeholder="Precio" style={{ flex: 1 }} />
          <ThemedTextInput placeholder="Inventario" style={{ flex: 1 }} />
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProductScreen;
