import React from "react";
import { StyleSheet, View } from "react-native";

import { Colors } from "../CommonStyles/CommonStyles";
// Importar el componente Button para generar botones
import Button from "./Button";

export default function AnotherLoginMethod({}) {
  return (
    <View style={styles.AnotherLoginContainer}>
      <View style={styles.AnotherLoginSubContainer}>
        <Button theme="IconPressable" Icon="Google" color={Colors.Blanco} />
      </View>
      <View style={styles.AnotherLoginSubContainer}>
        <Button
          theme="IconPressable"
          Icon="Facebook"
          color={Colors.Azul_Facebook}
        />
      </View>
      <View style={styles.AnotherLoginSubContainer}>
        <Button theme="IconPressable" Icon="IOS" color={Colors.Negro} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AnotherLoginContainer: {
    marginTop: "2%",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    columnGap: 12,
  },
  AnotherLoginSubContainer: {
    flex: 1,
    height: 44,
  },
});
