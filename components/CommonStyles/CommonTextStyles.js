import { StyleSheet } from "react-native";
import { Colors, FontSizes } from "./CommonStyles";

const CommonTextStyles = StyleSheet.create({
  // --> Heding_H5
  Heding_H5: {
    fontWeight: "700",
    fontSize: FontSizes.extraLarge,
    lineHeight: 29,
    color: Colors.NightBlue_800,
    letterSpacing: 0.01,
  },

  // --> Heding_H6
  Heding_H6: {
    fontWeight: "700",
    fontSize: FontSizes.large,
    lineHeight: 24,
    color: Colors.NightBlue_800,
    letterSpacing: 0.005,
  },

  // --> Body-S;
  Body_S: {
    fontWeight: "500",
    fontSize: FontSizes.small,
    lineHeight: 15,
    color: "red",
    letterSpacing: 0.01,
  },
  // --> Body-L;
  Body_L: {
    fontWeight: "500",
    fontSize: FontSizes.medium,
    lineHeight: 22,
    color: Colors.Placeholder,
    letterSpacing: 0.0044,
  },

  // --> SemiBold-M
  SemiBold_M: {
    fontWeight: "600",
    fontSize: FontSizes.small_14,
    lineHeight: 17,
    color: Colors.TexColor,
  },

  // --> SemiBold-L
  SemiBold_L: {
    fontWeight: "600",
    fontSize: FontSizes.medium,
    lineHeight: 24,
    color: Colors.TexColor,
    letterSpacing: 0.0044,
  },
});

export default CommonTextStyles;
