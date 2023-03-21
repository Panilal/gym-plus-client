import React from "react";
import { View } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";
import { useRoute } from "@react-navigation/native";

export default function ({ navigation }) {
    // const route = useRoute();   This is for getting the email address
    // const email = route.params?.email;

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>This is the Biometrics tab </Text>
      </View>
    </Layout>
  );
}
