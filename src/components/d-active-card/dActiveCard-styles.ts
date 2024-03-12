import { StyleSheet } from "react-native";

import { BORDERRADIUS, FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        marginBottom:20,
        backgroundColor:COLORS.bgcolor1,
    },
    background:{
        borderRadius:BORDERRADIUS.radius_8,
        overflow:'hidden',
    },
    content:{
        alignItems:'center',
    },
    txt:{
        fontFamily:'Fraunces_72pt-Regular',
        fontWeight:'700',
        fontSize:FONTSIZE.fsize_18,
        textAlign:'center',
        marginVertical:8,
    },
    btncontainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:12
    },
    btn:{
        marginVertical:12,
        backgroundColor:COLORS.bgcolor1,
        borderRadius:BORDERRADIUS.radius_8,
        elevation:3
    },
    btntxt:{
        color:COLORS.color1,
        fontFamily:'Quicksand-SemiBold',
        fontWeight:'600',
        fontSize:FONTSIZE.fsize_12,
        marginHorizontal:32,
        marginVertical:14,
    }
})