import {ImageStyle, Platform, StyleSheet, ViewStyle} from 'react-native';

import {COLORS, SPACING} from '../../theme';

interface Styles {
  tabBarStyle: ViewStyle;
  tabBarIcon: ImageStyle;
  iconContainer: ViewStyle;
  activeIcon: ImageStyle;
}

export const styles: Styles = StyleSheet.create({
  tabBarStyle: {
    // borderTopLeftRadius: SPACING.space_16,
    // borderTopRightRadius: SPACING.space_16,
    // height: Platform.OS === 'android' ? SPACING.space_88 : SPACING.space_76,
    // paddingHorizontal: SPACING.space_24,
    // paddingVertical: SPACING.space_20,
    // position: 'absolute',
  },
  iconContainer: {
    // flex: SPACING.space_1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: SPACING.space_100,
    // marginBottom: Platform.OS === 'android' ? SPACING.space_20 : SPACING.space_1,
  },
  activeIcon: {
    // backgroundColor: COLORS.primary[100],
  },
  tabBarIcon: {
    // height: SPACING.space_24,
    // width: SPACING.space_24,
  },
});
