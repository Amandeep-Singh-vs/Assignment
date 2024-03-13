// libraries
import { StyleSheet } from "react-native";

// theme
import { COLORS } from "./color";
import { SPACING } from "./spacing";

export const styles = StyleSheet.create({
  mainContainer:{
    flex:SPACING.space_1,
    flexDirection:'column',
    backgroundColor:COLORS.neutralWhite
  }
});