import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

import CommonStyles, { Colors, TexColor } from "../CommonStyles/CommonStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";

import BackCheckron from "../CommonComponents/BackCheckron";
import IconSvg from "../../assets/IconSvg";
import AnotherLoginMethod from "../CommonComponents/AnotherLoginMethod";

import useValidation from "./ValidationCreateAccount";

const CreateAccount = ({ navigation }) => {
  const initialState = {
    nombres: "",
    apellidos: "",
    celular: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    // Puedes agregar aquí los campos restantes...
  };

  const { state, setState, errors, validarCampos, setErrors } =
    useValidation(initialState);

  const handleChange = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = () => {
  //   console.log(state);
  //   if (validarCampos()) {
  //     console.log("Datos enviados:", {
  //       nombres,
  //       apellidos,
  //       celular,
  //       correo,
  //       usuario,
  //       contrasena,
  //     });
  //     // Acción de registro, por ejemplo, enviar los datos a un servidor
  //   }
  // };

  const handleSubmit = () => {
    let newErrors = { ...errors };

    for (let key in state) {
      if (!state[key]) {
        newErrors[key] = "Este campo no puede estar vacío";
      }
    }

    setErrors(newErrors);

    const errorCount = Object.keys(newErrors).length;
    console.log("Número de errores:", errorCount);
    console.log("Datos enviados:", state);
  };

  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View style={CommonSpacingStyles.VerticalSpacing_10_16}>
        <BackCheckron navigation={navigation} />
        <View style={[CommonStyles.ProgressBar, { marginBottom: 12 }]}>
          <IconSvg theme="ProgressBar" progress="90" />
        </View>
      </View>
      <ScrollView style={CommonStyles.ScrollView}>
        <View style={CommonStyles.FullContainer}>
          <Text style={[CommonTextStyles.Heding_H5, { marginTop: 12 }]}>
            Crear cuenta
          </Text>
          <Text style={[CommonTextStyles.SemiBold_L, { marginTop: 16 }]}>
            Crear la cuenta con tus redes o ingresar tu correo electrónico
          </Text>
          <View
            style={[
              CommonSpacingStyles.VerticalSpacing_32,
              { marginTop: 20, marginBottom: 24 },
            ]}
          >
            <AnotherLoginMethod />
            <View style={styles.AnotherLogin}>
              <View style={CommonStyles.Underscore} />
              <Text style={styles.TexAnotherLogin}>
                Crea cuenta con correo electrónico
              </Text>
              <View style={CommonStyles.Underscore} />
            </View>
            <View style={CommonStyles.container}>
              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Nombre(s)</Text>
                <TextInput
                  placeholder="Ingresa tu(s) nombre(s)"
                  value={state.nombres}
                  onChangeText={(value) => handleChange("nombres", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.nombres && styles.inputError,
                    ,
                  ]}
                />
                {errors.nombres ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.nombres}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Apellido(s)</Text>
                <TextInput
                  placeholder="Ingresa tu(s) apellido(s)"
                  value={state.apellidos}
                  onChangeText={(value) => handleChange("apellidos", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.apellidos && styles.inputError,
                  ]}
                />
                {errors.apellidos ? (
                  <Text style={CommonTextStyles.Body_S}>
                    {errors.apellidos}
                  </Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Fecha de nacimiento
                </Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    errors.fechaNacimiento && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="YYY/MM/DD"
                    value={state.fechaNacimiento}
                    onChangeText={(value) =>
                      handleChange("fechaNacimiento ", value)
                    }
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Calendario"}></IconSvg>
                  </View>
                </View>
                {errors.fechaNacimiento ? (
                  <Text style={CommonTextStyles.Body_S}>
                    {errors.fechaNacimiento}
                  </Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Número de celular</Text>
                <TextInput
                  placeholder="Ingresa tu número de celular"
                  value={state.celular}
                  onChangeText={(value) => handleChange("celular", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.celular && styles.inputError,
                  ]}
                />
                {errors.celular ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.celular}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Correo electrónico
                </Text>
                <TextInput
                  placeholder="Ingresa tu correo electrónico"
                  value={state.correo}
                  onChangeText={(value) => handleChange("correo", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.correo && styles.inputError,
                  ]}
                />
                {errors.correo ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.correo}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Nombre de usuario (Opcional)
                </Text>
                <View style={CommonStyles.SubContainer_2}>
                  <TextInput
                    placeholder="Ingresa un nombre de usuario"
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Contraseña</Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    errors.contrasena && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa tu contraseña"
                    value={state.contrasena}
                    onChangeText={(value) => handleChange("contrasena", value)}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.contrasena ? (
                  <Text style={CommonTextStyles.Body_S}>
                    {errors.contrasena}
                  </Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Confirmar Contraseña
                </Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    errors.confirmarContrasena && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Confirma tu contraseña"
                    value={state.confirmarContrasena}
                    onChangeText={(value) =>
                      handleChange("confirmarContrasena", value)
                    }
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.confirmarContrasena ? (
                  <Text style={CommonTextStyles.Body_S}>
                    {errors.confirmarContrasena}
                  </Text>
                ) : null}
              </View>

              {/* <Button title="Registrarse" onPress={handleSubmit} /> */}
              <Button
                title="Registrarse"
                onPress={() => navigation.navigate("TermsAndConditions")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  AnotherLogin: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  TexAnotherLogin: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    alignItems: "center",
    letterSpacing: 0.0044,
    color: TexColor.AnotherLogin,
    paddingHorizontal: 15,
  },
  inputError: {
    borderColor: "red",
  },
});
