// libraries
import { StyleSheet } from "react-native";

// theme
import { FONTFAMILY, FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";
import { SPACING } from "../../theme/spacing";

export const styles = StyleSheet.create({
  container:{
    paddingHorizontal: SPACING.space_20,
    paddingVertical:SPACING.space_17,
    borderBottomWidth:0.7,
    borderColor:COLORS.neutral100,
  },
  content:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:SPACING.space_4,
  },
  img:{
    marginRight:SPACING.space_20,
    height:52.43,
    width:56.2,
  },
  txt:{
    flex:1,
    marginRight:SPACING.space_8,
    fontFamily:FONTFAMILY.QuicksandMedium,
    color:COLORS.black,
    fontSize:FONTSIZE.fsize_14,
    textAlignVertical:'center',
  },
  timer:{
    flex:1,
    paddingHorizontal:SPACING.space_76,
  },
  timertxt:{
    fontFamily:FONTFAMILY.QuicksandMedium,
    fontSize:FONTSIZE.fsize_12,
    color:COLORS.neutral600,
    textAlignVertical:'center'
  },
  active:{
    backgroundColor:COLORS.primary50
  }
})