import { StyleSheet } from "react-native";
import { FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
      flexDirection:'column',
      alignItems:'center',
      marginTop:184,
      marginHorizontal:20,
    },
    img:{
      height:154,
      width:154,
      marginHorizontal:90.5,
    },
    content:{
      width:'100%',
      marginTop:27,
    },
    txtBold:{
      marginHorizontal:4,
      marginBottom:8,
      fontFamily:'Fraunces_72pt-Regular',
      fontWeight:'700',
      textAlign:'center',
      fontSize:FONTSIZE.fsize_24,
      color:COLORS.color2,
    },
    txtLight:{
      fontFamily:'Quicksand-Medium',
      fontWeight:'500',
      textAlign:'center',
      fontSize:FONTSIZE.fsize_16,
      color:COLORS.color1,
      textAlignVertical:'center'
    }
  })