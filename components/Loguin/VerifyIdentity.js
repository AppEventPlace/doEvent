import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";

import CommonStyles, { Colors } from "../CommonStyles/CommonStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";

import Button from "../CommonComponents/Button";
import { Color_Button } from "../CommonStyles/CommonButtonStyles";

const VerifyIdentity = ({ navigation }) => {
  const inputRefs = useRef([]);

  const handleTextChange = (text, index) => {
    // Mover automáticamente el foco al siguiente input si se ha ingresado un carácter
    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <SafeAreaView
      style={[
        CommonStyles.AreaView,
        { backgroundColor: Colors.Primary, justifyContent: "center" },
      ]}
    >
      <View style={CommonStyles.FullContainer}>
        <View style={CommonStyles.container}>
          <View style={CommonSpacingStyles.VerticalSpacing_56}>
            <View style={CommonSpacingStyles.VerticalSpacing_24}>
              <Text style={CommonTextStyles.Heding_H5}>
                Para verificar tu identidad
              </Text>
              <Text style={CommonTextStyles.Body_L}>
                Hemos enviado al número +57 3018451234 y al correo mail@mail.com
                un mensaje que contiene el código de seguridad de 6 dígitos el
                cual debes ingresar a continuación.
              </Text>
            </View>
            <View style={CommonSpacingStyles.VerticalSpacing_16}>
              <View style={styles.InputContainer}>
                {Array.from({ length: 6 }).map((_, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    style={styles.input}
                    onChangeText={(text) => handleTextChange(text, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    selectTextOnFocus={true} // Permitir seleccionar texto al enfocar
                  />
                ))}
              </View>
              <Text style={CommonTextStyles.Body_S}>
                Solicitar nuevo código
              </Text>
            </View>
            <View style={CommonStyles.BotonContainer}>
              <Button
                label="Continuar"
                color={Color_Button.Default}
                theme="StyleBoton"
                onPress={() => navigation.navigate("Successful")}
              />
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default VerifyIdentity;

const styles = StyleSheet.create({
  InputContainer: {
    columnGap: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    maxWidth: 40,
    height: 47,
    textAlign: "center",
    borderBottomColor: "#A1A5A9",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
