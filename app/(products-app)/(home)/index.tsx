import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { useProducts } from "@/presentation/products/hooks/useProducts";
import ProductList from "@/presentation/products/components/ProductList";

const HomeScreen = () => {
  const { productsQuery, loadNextPage } = useProducts();

  if (productsQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <ProductList
        products={productsQuery.data?.pages.flatMap((page) => page) ?? []}
        loadNextPage={loadNextPage}
      />
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
