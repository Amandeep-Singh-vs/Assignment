// libraries
import { StyleSheet } from "react-native";

// theme
import { SPACING } from './../../theme/spacing';
import { Typography } from "../../theme/typography";
import { COLORS } from "../../theme/color";

export const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:SPACING.space_184,
    marginHorizontal:SPACING.space_20,
  },
  img:{
    height:SPACING.space_154,
    width:SPACING.space_154,
    marginHorizontal:SPACING.space_90,
  },
  content:{
    width:'100%',
    marginTop:SPACING.space_27,
  },
  txtBold:{
    marginHorizontal:SPACING.space_4,
    marginBottom:SPACING.space_8,
    fontFamily:Typography.secondary.bold,
    fontWeight:'700',
    textAlign:'center',
    fontSize:SPACING.space_24,
    color:COLORS.tundora,
  },
  txtLight:{
    fontFamily:Typography.primary.medium,
    textAlign:'center',
    fontSize:SPACING.space_16,
    color:COLORS.neutral700,
    textAlignVertical:'center'
  }
})