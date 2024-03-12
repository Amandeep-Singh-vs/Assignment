// libraries
import { StyleSheet } from "react-native";

// theme
import { SPACING } from './../../theme/spacing';
import { FONTFAMILY, FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";

export const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:SPACING.space_184,
    marginHorizontal:SPACING.space_20,
  },
  img:{
    height:154,
    width:154,
    marginHorizontal:SPACING.space_90,
  },
  content:{
    width:'100%',
    marginTop:SPACING.space_27,
  },
  txtBold:{
    marginHorizontal:SPACING.space_4,
    marginBottom:SPACING.space_8,
    fontFamily:FONTFAMILY.FrauncesBold,
    fontWeight:'700',
    textAlign:'center',
    fontSize:FONTSIZE.fsize_24,
    color:COLORS.tundora,
  },
  txtLight:{
    fontFamily:FONTFAMILY.QuicksandMedium,
    textAlign:'center',
    fontSize:FONTSIZE.fsize_16,
    color:COLORS.neutral700,
    textAlignVertical:'center'
  }
})