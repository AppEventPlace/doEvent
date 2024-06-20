import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";

import { Colors } from "../CommonStyles/CommonStyles";

const BackCheckron = ({ navigation }) => {
  return (
    <View style={styles.HeaderContainer}>
      <Button
        theme="BackCheckron"
        label="Atras"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    height: 25,
    width: "100%",
  },
});
export default BackCheckron;
