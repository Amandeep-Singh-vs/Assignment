// libraries
import { StyleSheet } from "react-native";

// theme
import { Typography } from "../../theme/typography";
import { COLORS } from "../../theme/color";
import { SPACING } from "../../theme/spacing";

export const styles = StyleSheet.create({
    container:{
        flex:SPACING.space_1,
        flexDirection:'column',
        justifyContent:"center",
        marginBottom:SPACING.space_20,
        backgroundColor:COLORS.neutralWhite,
    },
    background:{
        borderRadius:SPACING.space_8,
        overflow:'hidden',
    },
    content:{
        alignItems:'center',
    },
    txt:{
        fontFamily:Typography.secondary.bold,
        fontWeight:'700',
        fontSize:SPACING.space_18,
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
        borderRadius:SPACING.space_8,
        elevation:3
    },
    btntxt:{
        color:COLORS.neutral700,
        fontFamily:Typography.primary.semiBold,
        fontSize:SPACING.space_12,
        marginHorizontal:SPACING.space_32,
        marginVertical:SPACING.space_14,
    }
})