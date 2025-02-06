import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/presentation/theme/components/ThemedView";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import { useProduct } from "../../../presentation/products/hooks/useProduct";
import ProductImages from "@/presentation/products/components/ProductImages";
import ThemeButtonGroup from "@/presentation/theme/components/ThemedButtonGroup";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import { Formik } from "formik";

const ProductScreen = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const { productQuery } = useProduct(`${id}`);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="camera-outline" size={25} />,
    });
  }, []);

  useEffect(() => {
    if (productQuery.data) {
      navigation.setOptions({
        title: productQuery.data.title,
      });
    }
  }, [productQuery.data]);

  if (productQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  if (!productQuery.data) {
    return <Redirect href={"/(products-app)/(home)"} />;
  }

  const product = productQuery.data!;

  return (
    <Formik initialValues={product}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView>
          <ProductImages images={product.images} />
          <ThemedView style={{ marginHorizontal: 10, marginTop: 20 }}>
            <ThemedTextInput
              placeholder="Título"
              style={{ marginVertical: 5 }}
            />
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

          <ThemedView style={{ marginHorizontal: 10 }}>
            <ThemeButtonGroup
              options={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
              selectedOptions={product.sizes}
              onSelect={(options) => console.log({ options })}
            />
            <ThemeButtonGroup
              options={["kid", "men", "women", "unisex"]}
              selectedOptions={[product.gender]}
              onSelect={(options) => console.log({ options })}
            />
          </ThemedView>

          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 50,
              marginTop: 20,
            }}
          >
            <ThemedButton
              icon="save-outline"
              onPress={() => console.log("guardar")}
            >
              Guardar
            </ThemedButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Formik>
  );
};

export default ProductScreen;
