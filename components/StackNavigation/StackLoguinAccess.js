import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/*---------------------------------------------------------------------------
Importar componentes propios requeridos para el Loguin / creación de usuario
---------------------------------------------------------------------------*/
import Loguin from "../../Screens/Loguin/Login";
import CreateAccount from "../../Screens/Loguin/CreateAccount";
import TermsAndConditions from "../../Screens/Loguin/TermsAndConditions";
import VerifyIdentity from "../../Screens/Loguin/VerifyIdentity";
import Gustos from "../../Screens/Loguin/Gustos";
import Successful from "../../Screens/Loguin/Successful";

const Stack = createStackNavigator();

const StackLoguinAccess = () => {
  const screens = {
    Loguin: Loguin,
    CreateAccount: CreateAccount,
    TermsAndConditions: TermsAndConditions,
    VerifyIdentity: VerifyIdentity,
    Gustos: Gustos,
    Successful: Successful,
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { flex: 1 },
      }}
    >
      {Object.keys(screens).map((name) => (
        <Stack.Screen key={name} name={name} component={screens[name]} />
      ))}
    </Stack.Navigator>
  );
};

export default StackLoguinAccess;
