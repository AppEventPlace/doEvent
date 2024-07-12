import { NavigationContainer } from "@react-navigation/native";

import MenuMovil from "./Screens/NavigationMenu/Menu";
import StackLoguinAccess from "./components/StackNavigation/StackLoguinAccess";

export default function App() {
  return (
    // <SafeAreaView style={CommonStyles.AreaView}>
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <StatusBar style="auto" />
    //   </View>
    // </SafeAreaView>
    <NavigationContainer>
      <MenuMovil />
    </NavigationContainer>
  );
}
