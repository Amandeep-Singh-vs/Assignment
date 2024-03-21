import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, Typography, SPACING} from '../../theme';

interface IStyles {
  container: ViewStyle;
  subContainer: ViewStyle;
  headerContainer: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  buttonContainer: ViewStyle;
  button: ImageStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: SPACING.space_1,
  },
  subContainer: {
    backgroundColor: COLORS.white,
    borderWidth: SPACING.space_1,
    borderRadius: SPACING.space_10,
    borderColor: COLORS.neutral['800'],
    gap: SPACING.space_16,
    margin: SPACING.space_10,
    padding: SPACING.space_20,
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: COLORS.neutral['400'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
  },
  subTitle: {
    color: COLORS.neutral['100'],
    fontFamily: Typography.secondary.semibold,
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: COLORS.neutral['800'],
    borderRadius: SPACING.space_10,
    flexDirection: 'row',
  },
  button: {
    padding: SPACING.space_10,
  },
});
