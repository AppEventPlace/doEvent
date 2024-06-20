import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

// --> Importar estilos comunes
import { BackCheckron } from "../CommonStyles/CommonStyles";

import { Text_Button } from "../CommonStyles/CommonButtonStyles";
import IconSvg from "../../assets/IconSvg";

/*---------------------------------------------------------------------------
Componente  Diseñado renderizar botones de forma predeterminada.
-	theme: 	  Dtermina el estilo de botón que se desea usar 
-	label: 		Usar para definir el Texto del botón 
-	color: 		Define el color de fondo 
-	onPress:	Acción  al oprimir el botón 
- Icon:     Nombre del Icono a mostrar dentro del botón (Usar IconSvg)
---------------------------------------------------------------------------*/
export default function Button({
  label,
  theme,
  onPress,
  color,
  disabled,
  Icon,
  IconColor,
}) {
  switch (theme) {
    // --> Botón principal
    case "StyleBoton":
      return (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#6866D4" : color },
          ]}
          onPress={onPress}
        >
          <Text style={styles.StyleButtonLabel_1}>{label}</Text>
        </Pressable>
      );

    // --> Botón secundario + borde
    case "StyleBoton_1":
      return (
        <Pressable
          style={[styles.button, { backgroundColor: color }]}
          onPress={onPress}
        >
          <Text style={styles.StyleButtonLabel_2}>{label}</Text>
          {/* <IconSVG theme={Icon} color={IconColor} /> */}
        </Pressable>
      );

    // -->
    case "IconPressable":
      return (
        <Pressable
          style={[styles.AnotherLoginButton, { backgroundColor: color }]}
          onPress={() => alert("You pressed a button1.")}
        >
          <IconSvg theme={Icon} />
        </Pressable>
      );

    // --> Genérico: Se adapta al contenedor principal, usar este estilo de botón , en caracteres  que realicen  alguna acción.
    case "Generico":
      return (
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button1.")}
        >
          <Text style={styles.StyleButtonLabel_3}>{label}</Text>
        </Pressable>
      );

    // --> Botón: Regresar a la pantalla anterior
    case "BackCheckron":
      return (
        <Pressable style={styles.BackButton} onPress={onPress}>
          <IconSvg theme="BackCheckron" IconColor={BackCheckron.Color} />
          <Text style={styles.BackButtonTex}>{label}</Text>
        </Pressable>
      );

    // --> Por defecto
    default:
      return (
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button2.")}
        >
          <Text style={styles.StyleButtonLabel_1}>{label}</Text>
        </Pressable>
      );
  }
}

const styles = StyleSheet.create({
  button: {
    minWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 50,
    columnGap: 5,
  },
  StyleButtonLabel_1: {
    color: Text_Button.StyleButtonLabel_1,
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "700",
    lineHeight: 19,
  },
  StyleButtonLabel_2: {
    color: Text_Button.StyleButtonLabel_2,
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "700",
    lineHeight: 19,
  },
  StyleButtonLabel_3: {
    color: Text_Button.StyleButtonLabel_3,
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "500",
    lineHeight: 19,
    textDecorationLine: "underline",
  },
  AnotherLoginButton: {
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  BackButton: {
    width: 75,
    height: 25,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  BackButtonTex: {
    fontSize: Text_Button.FontSizesButton,
    fontWeight: "500",
    color: Text_Button.BackButtonTex,
    lineHeight: 22,
    letterSpacing: 0.0044,
  },
});
