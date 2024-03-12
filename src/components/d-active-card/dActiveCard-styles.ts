// libraries
import { StyleSheet } from "react-native";

// theme
import { BORDERRADIUS, FONTFAMILY, FONTSIZE } from "../../theme/typography";
import { COLORS } from "../../theme/color";
import { SPACING } from "../../theme/spacing";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        marginBottom:SPACING.space_20,
        backgroundColor:COLORS.neutralWhite,
    },
    background:{
        borderRadius:BORDERRADIUS.radius_8,
        overflow:'hidden',
    },
    content:{
        alignItems:'center',
    },
    txt:{
        fontFamily:FONTFAMILY.FrauncesBold,
        fontWeight:'700',
        fontSize:FONTSIZE.fsize_18,
        textAlign:'center',
        marginVertical:SPACING.space_8,
    },
    btncontainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:12
    },
    btn:{
        marginVertical:SPACING.space_12,
        backgroundColor:COLORS.neutralWhite,
        borderRadius:BORDERRADIUS.radius_8,
        elevation:3
    },
    btntxt:{
        color:COLORS.neutral700,
        fontFamily:FONTFAMILY.QuicksandSemiBold,
        fontSize:FONTSIZE.fsize_12,
        marginHorizontal:SPACING.space_32,
        marginVertical:SPACING.space_14,
    }
})