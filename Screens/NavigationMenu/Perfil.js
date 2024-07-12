import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/*---------------------------------------------------------------------------
Importar componentes propios requeridos para el Perfil de Usuario
---------------------------------------------------------------------------*/
import PerfilDeUsuario from "../PerfilScreen/PerfilDeUsuario";
import EditarPerfil from "../../Screens/PerfilScreen/EditarPerfil";
import EventosCreados from "../../Screens/PerfilScreen/EventosCreados";
import LugaresDeEventos from "../../Screens/PerfilScreen/LugaresDeEventos";
import EstadísticasDeEventos from "../../Screens/PerfilScreen/EstadísticasDeEventos";

const Stack = createStackNavigator();

const StackPerfil = () => {
  const screens = {
    PerfilDeUsuario: PerfilDeUsuario,
    EditarPerfil: EditarPerfil,
    EventosCreados: EventosCreados,
    LugaresDeEventos: LugaresDeEventos,
    EstadísticasDeEventos: EstadísticasDeEventos,
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

export default StackPerfil;
