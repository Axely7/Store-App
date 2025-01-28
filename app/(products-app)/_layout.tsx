import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAuthStore } from "../../presentation/auth/store/useAuthStore";

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <View>
      <Text>CheckAuthenticationLayout</Text>
    </View>
  );
};

export default CheckAuthenticationLayout;
