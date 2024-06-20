import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

import CommonStyles, { Colors } from "../CommonStyles/CommonStyles";
import CommonTextStyles from "../CommonStyles/CommonTextStyles";
import CommonSpacingStyles from "../CommonStyles/CommonSpacingStyles";
import { Color_Button } from "../CommonStyles/CommonButtonStyles";

import Button from "../CommonComponents/Button";

const TermsAndConditions = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={CommonStyles.FullContainer}>
          <View
            style={[
              CommonSpacingStyles.VerticalSpacing_32,
              { marginBottom: 24 },
            ]}
          >
            <View style={styles.Title}>
              <Text style={CommonTextStyles.Heding_H6}>
                {`Términos y condiciones\ Tratamiento de datos personales`}
              </Text>
            </View>

            <View style={CommonStyles.container}>
              <View style={CommonSpacingStyles.VerticalSpacing_40}>
                <Text
                  style={[
                    CommonTextStyles.Body_S,
                    { color: "black", textAlign: "justify" },
                  ]}
                >
                  Lorem ipsum dolor sit amet consectetur. Sed ornare fames etiam
                  mauris in id facilisi. Id purus aliquam at nibh. Sit gravida
                  nec risus posuere. Eu bibendum suspendisse sed aliquam quis
                  cras. Scelerisque amet erat pharetra sem vitae. Amet velit
                  amet eget feugiat justo velit enim vitae. Sodales sapien ipsum
                  sed eget eu amet. Molestie dictumst velit sem mauris id.
                  Viverra in arcu eget adipiscing hendrerit. Pharetra
                  sollicitudin mauris placerat molestie. Nibh pellentesque
                  cursus suscipit nisi turpis felis mauris. Nibh nullam at sed
                  tortor tortor. Aenean sit tempor amet faucibus. Amet cursus
                  molestie malesuada pretium consequat purus.\ • Porttitor
                  pulvinar risus magnis tellus interdum. Dui libero diam cras
                  feugiat pellentesque a posuere pulvinar. Viverra quam semper
                  ullamcorper commodo at id vulputate tortor vulputate. Sed
                  elementum sem volutpat purus sit at malesuada. Massa in
                  adipiscing viverra sit sagittis. Nibh in enim turpis ut
                  scelerisque. Mattis mauris elementum tortor enim sit id.
                  Consequat elementum id amet risus libero sem.\ • Porttitor
                  ornare quis odio egestas elementum mauris mattis. Sed lacus
                  nunc cursus non morbi vel et aliquet egestas. Varius viverra
                  nec augue cursus auctor purus.\ • Porttitor pulvinar risus
                  magnis tellus interdum. ornare quis odio egestas elementum
                  mauris mattis. Sed lacus nunc cursus non morbi vel et aliquet
                  egestas. Varius viverra nec augue cursus auctor purus.
                </Text>

                <View
                  style={[
                    CommonSpacingStyles.VerticalSpacing_24,
                    { width: "100%", maxWidth: 326 },
                  ]}
                >
                  <View style={CommonStyles.BotonContainer}>
                    <Button
                      label="Aceptar"
                      color={Color_Button.Default}
                      theme="StyleBoton"
                      onPress={() => navigation.navigate("CreateAccount")}
                    />
                  </View>
                  <View style={CommonStyles.BotonContainer_1}>
                    <Button
                      label="Cancelar"
                      color={Color_Button.Secondary}
                      theme="StyleBoton_1"
                      onPress={() => navigation.navigate("CreateAccount")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  Title: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
