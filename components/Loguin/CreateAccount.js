import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";

import CommonStyles, { Colors, TexColor } from "../CommonStyles/CommonStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";

import BackCheckron from "../CommonComponents/BackCheckron";
import IconSvg from "../../assets/IconSvg";
import AnotherLoginMethod from "../CommonComponents/AnotherLoginMethod";

import useValidation from "./ValidationCreateAccount";
import CheckedTerms from "../CommonComponents/CheckedTerms";
import CreateUser from "../../APIs/CreateUser";

const CreateAccount = ({ navigation }) => {
  const initialState = {
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    contraseña: "",
    confirmarContraseña: "",
    // Puedes agregar aquí los campos restantes...
  };

  const { state, setState, errors, validarCampos, setErrors, getStateAsJson } =
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
    const stateJson = getStateAsJson();
    //console.log("Datos enviados:", stateJson);

    CreateUser(stateJson);
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
                  value={state.nombre}
                  onChangeText={(value) => handleChange("nombre", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.nombre && styles.inputError,
                    ,
                  ]}
                />
                {errors.nombre ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.nombre}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Apellido(s)</Text>
                <TextInput
                  placeholder="Ingresa tu(s) apellido(s)"
                  value={state.apellido}
                  onChangeText={(value) => handleChange("apellido", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.apellido && styles.inputError,
                  ]}
                />
                {errors.apellido ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.apellido}</Text>
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
                      handleChange("fechaNacimiento", value)
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
                  value={state.email}
                  onChangeText={(value) => handleChange("email", value)}
                  style={[
                    CommonStyles.TexInput,
                    errors.email && styles.inputError,
                  ]}
                />
                {errors.email ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.email}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>
                  Nombre de usuario (Opcional)
                </Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    errors.usuario && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa un nombre de usuario"
                    value={state.usuario}
                    onChangeText={(value) => handleChange("usuario", value)}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.usuario ? (
                  <Text style={CommonTextStyles.Body_S}>{errors.usuario}</Text>
                ) : null}
              </View>

              <View style={CommonStyles.SubContainer}>
                <Text style={CommonStyles.TexContainer}>Contraseña</Text>
                <View
                  style={[
                    CommonStyles.SubContainer_2,
                    errors.contraseña && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Ingresa tu contraseña"
                    value={state.contraseña}
                    onChangeText={(value) => handleChange("contraseña", value)}
                    secureTextEntry={true}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.contraseña ? (
                  <Text style={CommonTextStyles.Body_S}>
                    {errors.contraseña}
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
                    errors.confirmarContraseña && styles.inputError,
                  ]}
                >
                  <TextInput
                    placeholder="Confirma tu contraseña"
                    value={state.confirmarContraseña}
                    onChangeText={(value) =>
                      handleChange("confirmarContraseña", value)
                    }
                    secureTextEntry={true}
                    style={CommonStyles.TexInput_1}
                  />
                  <View style={CommonStyles.SubContainer_3}>
                    <IconSvg theme={"Check"}></IconSvg>
                  </View>
                </View>
                {errors.confirmarContraseña ? (
                  <Text style={CommonTextStyles.Body_S}>
                    {errors.confirmarContraseña}
                  </Text>
                ) : null}
              </View>
            </View>
            <CheckedTerms navigation={navigation} onPres={handleSubmit} />
            {/* <Button title="Registrarse" onPress={handleSubmit} /> */}
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
