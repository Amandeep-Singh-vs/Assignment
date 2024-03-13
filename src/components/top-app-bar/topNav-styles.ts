// libraries
import { StyleSheet } from "react-native";

// theme
import { Typography } from "../../theme/typography";
import { COLORS } from "../../theme/color";
import { SPACING } from "../../theme/spacing";

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal:SPACING.space_24,
    paddingVertical:SPACING.space_16,
  },
  blank:{
    height:SPACING.space_24,
    width:SPACING.space_24,
  },
  img:{
    height:SPACING.space_24,
    width:SPACING.space_24,
  },
  txt:{
    flex:SPACING.space_1,
    fontFamily:Typography.secondary.bold,
    fontWeight:'700',
    fontSize:SPACING.space_18,
    textAlign:'center',
    color:COLORS.neutral700,
    marginHorizontal:SPACING.space_16,
  }
})