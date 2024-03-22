import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderWidth: SPACING.space_1,
    borderColor: COLORS.neutral['800'],
    borderRadius: SPACING.space_10,
    marginBottom: SPACING.space_128,
    paddingHorizontal: SPACING.space_12,
  },
  title: {
    color: COLORS.neutral['400'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
    marginVertical: SPACING.space_4,
  },
});
