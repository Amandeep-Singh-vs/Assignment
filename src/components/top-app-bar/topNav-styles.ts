// libraries
import { StyleSheet } from "react-native";

// theme
import { FONTFAMILY, FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";
import { SPACING } from "../../theme/spacing";

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal:SPACING.space_24,
    paddingVertical:SPACING.space_16,
  },
  blank:{
    height:24,
    width:24,
  },
  img:{
    height:24,
    width:24,
  },
  txt:{
    flex:1,
    fontFamily:FONTFAMILY.FrauncesBold,
    fontWeight:'700',
    fontSize:FONTSIZE.fsize_18,
    textAlign:'center',
    color:COLORS.neutral700,
    marginHorizontal:SPACING.space_16,
  }
})