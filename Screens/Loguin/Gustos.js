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
import { LinearProgress } from "@rneui/themed";

import CommonStyles, {
  Colors,
  TexColor,
} from "../../components/CommonStyles/CommonStyles";
import CommonSpacingStyles from "../../components/CommonStyles/CommonSpacingStyles";
import CommonTextStyles from "../../components/CommonStyles/CommonTextStyles";
import { Color_Button } from "../../components/CommonStyles/CommonButtonStyles";

import BackCheckron from "../../components/CommonComponents/BackCheckron";
import Button from "../../components/CommonComponents/Button";

const Gustos = ({ navigation }) => {
  const Progress = 0.4;

  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View style={CommonSpacingStyles.VerticalSpacing_10_16}>
        <BackCheckron navigation={navigation} />
      </View>
      <ScrollView style={CommonStyles.ScrollView}>
        <View style={CommonStyles.FullContainer}>
          <View style={[CommonStyles.ProgressBar, { marginVertical: 12 }]}>
            <LinearProgress
              style={{
                marginVertical: 10,
                borderRadius: 20,
                height: 4,
                flex: 1,
              }}
              value={Progress}
              color="#515EC0"
              variant="determinate"
              trackColor="#E9EAFE"
              animation={{ duration: 1500 }}
            />
            <Text>{Progress * 100}%</Text>
          </View>
          <View style={CommonSpacingStyles.VerticalSpacing_40}>
            <View style={CommonSpacingStyles.VerticalSpacing_24}>
              <View style={CommonSpacingStyles.VerticalSpacing_16}>
                <Text style={CommonTextStyles.Heding_H5}>
                  Gustos y servicios
                </Text>
                <Text style={CommonTextStyles.SemiBold_L}>
                  Selecciona algunos eventos a los cuales te gusta ir o
                  participar
                </Text>
              </View>
              <View style={CommonStyles.container}></View>
              <View style={CommonStyles.container}></View>
            </View>
            <View style={CommonStyles.BotonContainer}>
              <Button
                theme="Checked"
                label="Continuar"
                color={Color_Button.Default}
                onPress={() => {
                  navigation.navigate("VerifyIdentity");
                  onPres();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Gustos;
