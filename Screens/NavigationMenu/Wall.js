import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/*---------------------------------------------------------------------------
Importar componentes propios requeridos para el Wall
---------------------------------------------------------------------------*/
import MainWall from "../WallScreen/MainWall";
import CreateEvent from "../WallScreen/CreateEventScreen/CreateEvent";
import EventSummary from "../WallScreen/CreateEventScreen/EventSummary";
import TicketDetail from "../WallScreen/CreateEventScreen/TicketDetail";

const Stack = createStackNavigator();

const StackWall = () => {
  const screens = {
    MainWall: MainWall,
    CreateEvent: CreateEvent,
    EventSummary: EventSummary,
    TicketDetail: TicketDetail,
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

export default StackWall;
