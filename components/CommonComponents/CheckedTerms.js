import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { CheckBox } from "@rneui/themed";
import Button from "./Button";

import CommonStyles, { Colors } from "../CommonStyles/CommonStyles";
import { Color_Button } from "../CommonStyles/CommonButtonStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";

/*
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  Este componente valida que el usuario acepte los términos y condiciones.
  i checkbox = True      Se habilita el botón para continuar.
  Si checkbox = false     El botón para continuar permanece inhabilitado.

  1.	Componente TerminosCondiciones:
    a)	Este componente funcional se encarga de mostrar una interfaz para aceptar 
        los términos y condiciones.
    b)	Utiliza el estado local (useState) para rastrear si el usuario ha aceptado
        los términos (aceptado).
    c)	Cuando el usuario cambia el estado del checkbox, se actualiza el valor de
        aceptado.
  ----------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------
  */

const CheckedTerms = ({ navigation, onPres }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={CommonSpacingStyles.VerticalSpacing_24}>
      <View style={styles.Container}>
        <CheckBox
          checked={isChecked}
          onPress={handleCheckChange}
          size={24}
          containerStyle={styles.CheckBox}
          checkedColor={Colors.NightBlue_600}
          uncheckedColor={Colors.NightBlue_600}
          // iconType="material-community"
          // checkedIcon="checkbox-marked"
          // uncheckedIcon="checkbox-blank-outline"
        />
        <View style={styles.BotonContainer}>
          <Button
            theme="TexTerms"
            color={Colors.TexColor}
            label="Aceptar términos, condiciones y tratamiento de datos personales."
            onPress={() => navigation.navigate("TermsAndConditions")}
          />
        </View>
      </View>
      <View style={CommonStyles.BotonContainer}>
        <Button
          theme="Checked"
          label="Iniciar sesión"
          disabled={isChecked}
          color={Color_Button.Default}
          onPress={() => {
            navigation.navigate("VerifyIdentity");
            onPres();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 0,
  },
  CheckBox: {
    width: 35,
    padding: 5,
    backgroundColor: null,
    borderColor: "black",
  },

  BotonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

//         <CheckBox
//           style={styles.checkbox}
//           checked={aceptado}
//           color={aceptado ? "#6979F8" : undefined}
//           onValueChange={setAceptado}
//         />

export default CheckedTerms;

// const TerminosCondiciones = ({
//   navigation,
//   Name,
//   Lastname,
//   FechaNacimiento,
//   Celular,
//   email,
//   usuario,
//   contraseña,
// }) => {
//   const [aceptado, setAceptado] = useState(false);

//   return (
//     <View style={styles.Container}>
//       <View
//         style={{
//           gap: 8,
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "center",
//           maxWidth: 800,
//           width: "95%",
//           paddingHorizontal: 10,
//           borderWidth: 1,
//         }}
//       >
//         <CheckBox
//           style={styles.checkbox}
//           checked={aceptado}
//           color={aceptado ? "#6979F8" : undefined}
//           onValueChange={setAceptado}
//         />
//         <Button
//           theme="TexTerms"
//           label="Aceptar términos, condiciones y tratamiento de datos personales."
//           onPress={() => navigation.navigate("TermsAndConditions")}
//         />
//       </View>
//       <View style={styles.BotonContainer}>
//         <Button
//           label="Continuar"
//           theme="Terms"
//           onPress={() => [
//             navigation.navigate("VerifyIdentity"),
//             CrearCuenta(
//               Name,
//               Lastname,
//               FechaNacimiento,
//               Celular,
//               email,
//               usuario,
//               contraseña
//             ),
//           ]}
//           disabled={aceptado}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   Container: {
//     gap: 56,
//     marginTop: 24,
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//   },
//   checkbox: {
//     borderRadius: 4,
//     width: 20,
//     height: 20,
//     borderColor: "#6979F8",
//   },

//   BotonContainer: {
//     maxWidth: 326,
//     width: "100%",
//     height: 43,
//     //borderWidth: 1,
//   },
// });

// export default TerminosCondiciones;
