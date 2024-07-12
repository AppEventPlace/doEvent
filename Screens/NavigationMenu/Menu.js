import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Colors } from "../../components/CommonStyles/CommonStyles";

import ChatScreen from "./Chat";
import NotificaciónScreen from "./Notificación";
import PerfilScreen from "./Perfil";
import TicketsScreen from "./Tickets";
import WallScreen from "./Wall";
import IconSvg from "../../assets/IconSvg";

const Tab = createBottomTabNavigator();

// Array de items de pestañas
const TabItems = [
  { name: "Notificación", source: "Icon_Notificación" },
  { name: "Chat", source: "Icon_Chat" },
  { name: "Wall", source: "Icon_Wall" },
  { name: "Mis Boletas", source: "Icon_Tickets" },
  { name: "Perfil", source: "Icon_Perfil" },
];

const MenuMovil = () => {
  return (
    <Tab.Navigator initialRouteName="Wall">
      {TabItems.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#E4E5E5",
            tabBarIconStyle: {
              width: "100%",
            },
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <IconSvg
                  theme={item.source}
                  IconColor={focused ? Colors.NightBlue_600 : Colors.Negro}
                  ancho="24"
                  alto="24"
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: focused ? Colors.NightBlue_600 : Colors.Negro,
                    fontSize: 10,
                    marginTop: 4,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            ),
          }}
          component={
            item.name === "Chat"
              ? ChatScreen
              : item.name === "Notificación"
              ? NotificaciónScreen
              : item.name === "Perfil"
              ? PerfilScreen
              : item.name === "Mis Boletas"
              ? TicketsScreen
              : WallScreen
          }
        />
      ))}
    </Tab.Navigator>
  );
};

export default MenuMovil;
