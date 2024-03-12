import { StyleSheet } from "react-native";
import { FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      paddingHorizontal:24,
      paddingVertical:16,
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
      fontSize:FONTSIZE.fsize_18,
      fontWeight:'700',
      textAlign:'center',
      fontFamily:"Fraunces_72pt-Regular",
      color:COLORS.color5,
      marginHorizontal:16,
    }
  })