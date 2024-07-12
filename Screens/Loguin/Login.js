import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

import CommonStyles, {
  Colors,
  TexColor,
} from "../../components/CommonStyles/CommonStyles";
import { Color_Button } from "../../components/CommonStyles/CommonButtonStyles";
import IconSvg from "../../assets/IconSvg";
import Button from "../../components/CommonComponents/Button";
import AnotherLoginMethod from "../../components/CommonComponents/AnotherLoginMethod";

const Loguin = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[styles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View style={styles.LogoContainer}>
        <IconSvg theme="LogoSvg" />
      </View>
      <View style={styles.Container}>
        <View style={[CommonStyles.SubContainer, { height: 79 }]}>
          <Text style={CommonStyles.TexContainer}>Correo electrónico</Text>
          <TextInput
            placeholder="Ingresa tu correo electrónico"
            style={CommonStyles.TexInput}
          />
        </View>
        <View style={[CommonStyles.SubContainer, { height: 79 }]}>
          <Text style={CommonStyles.TexContainer}>Contraseña</Text>
          <TextInput
            placeholder="Ingresa la contraseña"
            style={CommonStyles.TexInput}
            secureTextEntry={true}
          />
        </View>
        <View style={CommonStyles.BotonContainer}>
          <Button
            label="Iniciar sesión"
            color={Color_Button.Default}
            theme="StyleBoton"
            onPress={() => alert("Iniciar sesión")}
          />
        </View>
        <View style={CommonStyles.BotonContainer_1}>
          <Button
            label="Crear cuenta"
            color={Color_Button.Secondary}
            theme="StyleBoton_1"
            onPress={() => navigation.navigate("CreateAccount")}
          />
        </View>
        <View style={styles.ForgetPassword}>
          <Button theme="Generico" label="Olvide mi contraseña" />
        </View>
      </View>
      <View style={styles.AnotherLogin}>
        <View style={CommonStyles.Underscore} />
        <Text style={styles.TexAnotherLogin}>Inicio sesion con otro medio</Text>
        <View style={CommonStyles.Underscore} />
      </View>
      <View style={styles.AnotherLoginContainer}>
        <AnotherLoginMethod />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AreaView: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  LogoContainer: {
    width: 218,
    height: 64,
    alignSelf: "center",
  },
  Container: {
    rowGap: 24,
    marginTop: "5%",
    width: "100%",
    maxWidth: 358, // -->  Ancho máximo
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "white",
    // Android
    elevation: 5,
    // iOS
    shadowColor: "#000", // -->  Sombra
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    borderRadius: 12,
  },
  ForgetPassword: {
    width: 200,
    height: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  AnotherLogin: {
    marginTop: "5%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 358, // Ancho máximo
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
  AnotherLoginContainer: {
    justifyContent: "center",
    columnGap: 12,
    width: "100%",
    maxWidth: 358, // Ancho máximo
    marginTop: "3%",
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default Loguin;
