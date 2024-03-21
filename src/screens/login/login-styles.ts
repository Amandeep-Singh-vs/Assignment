import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IStyles {
  container: ViewStyle;
  subContainer: ViewStyle;
  title: TextStyle;
  numberContainer: ViewStyle;
  inputLabel: TextStyle;
  inputArea: TextStyle;
  passwordContainer: ViewStyle;
  signInButton: ViewStyle;
  buttonLabel: TextStyle;
  error: TextStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_8,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: SPACING.space_154,
  },
  title: {
    color: COLORS.primary['100'],
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    lineHeight: SPACING.space_32,
    marginTop: SPACING.space_32,
    textAlign: 'center',
  },
  numberContainer: {
    gap: SPACING.space_4,
    marginTop: SPACING.space_62,
  },
  inputLabel: {
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
    fontFamily: Typography.primary.medium,
    color: COLORS.neutral['200'],
  },
  inputArea: {
    borderColor: COLORS.neutral['50'],
    borderWidth: SPACING.space_1,
    borderRadius: SPACING.space_16,
    padding: SPACING.space_16,
  },
  passwordContainer: {
    gap: SPACING.space_4,
  },
  signInButton: {
    backgroundColor: COLORS.primary['100'],
    borderRadius: SPACING.space_8,
    padding: SPACING.space_16,
  },
  buttonLabel: {
    color: COLORS.white,
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
    textAlign: 'center',
  },
  error: {
    color: COLORS.failure,
    fontFamily: Typography.secondary.medium,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_24,
    marginBottom: SPACING.space_4,
  },
});
