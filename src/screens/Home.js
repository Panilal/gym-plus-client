import React from "react";
import {Linking } from "react-native";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Layout,
} from "react-native";

export default function ({ navigation }) {
  // const { isDarkmode, setTheme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo-colour.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.logo}>Welcome to GYM+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    width: "10%",
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginBottom: 40,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
 
 
});