import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, Typography, SPACING} from '../../theme';

interface Istyles {
  container: ViewStyle;
  subContainer: ViewStyle;
  title: TextStyle;
  containerText: TextStyle;
}

export const styles: Istyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: SPACING.space_1,
    justifyContent: 'space-between',
  },
  subContainer: {
    alignItems: 'center',
    gap: SPACING.space_32,
    marginTop: '30%',
  },
  title: {
    color: COLORS.primary['100'],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    textAlign: 'center',
  },
  containerText: {
    fontFamily: Typography.primary.semiBold,
    fontSize: SPACING.space_14,
    lineHeight: SPACING.space_18,
    marginBottom: '10%',
  },
});
