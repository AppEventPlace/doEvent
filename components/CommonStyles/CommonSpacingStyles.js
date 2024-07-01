import { StyleSheet } from "react-native";

// Espaciado vertical sin bordes
const CommonSpacingStyles = StyleSheet.create({
  // Espaciado vertical y borde horizontal del 16
  VerticalSpacing_10_16: {
    width: "100%",
    rowGap: 10,
    alignSelf: "center",
    paddingHorizontal: 16,
  },
  VerticalSpacing_16: {
    width: "100%",
    rowGap: 16,
    alignSelf: "center",
  },
  VerticalSpacing_24: {
    width: "100%",
    rowGap: 24,
    alignSelf: "center",
  },
  VerticalSpacing_32: {
    width: "100%",
    rowGap: 32,
    alignSelf: "center",
  },
  VerticalSpacing_40: {
    width: "100%",
    rowGap: 40,
    alignSelf: "center",
  },
  VerticalSpacing_56: {
    width: "100%",
    rowGap: 56,
    alignSelf: "center",
  },
});

export default CommonSpacingStyles;
