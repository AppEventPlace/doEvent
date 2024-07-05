import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import CommonStyles, { Colors } from "../CommonStyles/CommonStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";
import { Color_Button } from "../CommonStyles/CommonButtonStyles";

import Button from "../CommonComponents/Button";
import IconSvg from "../../assets/IconSvg";

const Successful = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View style={[CommonStyles.ProgressBar, { margin: 0 }]}>
        <IconSvg theme="ProgressBar" progress="90" />
      </View>
      <View
        style={[
          CommonStyles.FullContainer,
          { height: "100%", justifyContent: "center" },
        ]}
      >
        <View style={CommonStyles.container}>
          <View style={CommonSpacingStyles.VerticalSpacing_32}>
            <View
              style={[
                CommonSpacingStyles.VerticalSpacing_24,
                { alignItems: "center" },
              ]}
            >
              <IconSvg theme="Well_done" />
              <Text style={CommonTextStyles.Heding_H14}>¡Estupendo!</Text>
              <Text
                style={[CommonTextStyles.Heding_H6, { textAlign: "center" }]}
              >
                Has completado tu registro con éxito.
              </Text>
            </View>
            <Text style={[CommonTextStyles.Heding_H6, { textAlign: "center" }]}>
              Ahora puedes buscar o crear eventos dentro de la plataforma
              ¡Bienvenido!
            </Text>
            <View style={CommonStyles.BotonContainer}>
              <Button
                label="Continuar"
                color={Color_Button.Default}
                theme="StyleBoton"
                onPress={() => alert("Iniciar sesión")}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Successful;
