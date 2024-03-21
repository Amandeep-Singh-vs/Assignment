import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  subContainer: ViewStyle;
  dots: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  title: TextStyle;
  content: TextStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_24,
    paddingTop: SPACING.space_172,
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: SPACING.space_50,
    paddingTop: SPACING.space_52,
    marginBottom: SPACING.space_100,
  },
  image: {
    width: SPACING.space_100,
    height: SPACING.space_100,
  },
  subContainer: {
    alignItems: 'center',
    gap: SPACING.space_12,
  },
  dots: {
    backgroundColor: COLORS.primary['100'],
    width: SPACING.space_10,
    height: SPACING.space_10,
  },
  button: {
    paddingTop: SPACING.space_4,
  },
  buttonText: {
    fontFamily: Typography.secondary.semibold,
    fontSize: SPACING.space_12,
    fontStyle: 'italic',
    lineHeight: SPACING.space_16,
  },
  title: {
    color: COLORS.neutral['400'],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
  },
  content: {
    color: COLORS.neutral['100'],
    fontFamily: Typography.primary.semiBold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
    marginHorizontal: SPACING.space_12,
    textAlign: 'center',
  },
});
