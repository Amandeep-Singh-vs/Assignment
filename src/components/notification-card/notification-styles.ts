import { StyleSheet } from "react-native";
import { FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
      paddingHorizontal: 20,
      paddingVertical:17,
      borderBottomWidth:0.7,
      borderColor:COLORS.bdcolor1,
    },
    content:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginBottom:4,
    },
    img:{
      marginRight:20,
      height:52.43,
      width:56.2,
    },
    txt:{
      flex:1,
      marginRight:8,
      fontFamily:'Quicksand-Medium',
      color:COLORS.color3,
      fontWeight:'500',
      fontSize:FONTSIZE.fsize_14,
      textAlignVertical:'center',
    },
    timer:{
      flex:1,
      paddingHorizontal:76,
    },
    timertxt:{
      fontFamily:'Quicksand-Light',
      fontSize:FONTSIZE.fsize_12,
      fontWeight:'500',
      color:COLORS.color4,
      textAlignVertical:'center'
    },
    active:{
      backgroundColor:COLORS.bgcolor2
    }
})