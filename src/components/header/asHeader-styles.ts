import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IStyles {
  container: ViewStyle;
  icon: TextStyle;
  title: TextStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    elevation: SPACING.space_10,
    flexDirection: 'row',
    marginBottom: SPACING.space_1,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
    shadowColor: COLORS.neutral['100'],
  },
  icon: {
    color: COLORS.neutral['100'],
  },
  title: {
    color: COLORS.neutral['600'],
    flex: SPACING.space_1,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    marginHorizontal: SPACING.space_16,
    textAlign: 'center',
  },
});
