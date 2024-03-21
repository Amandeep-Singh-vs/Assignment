import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
  subContainer: ViewStyle;
  subContainerLegend1: ViewStyle;
  subContainerLegend2: ViewStyle;
  subContainerTitle: TextStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderWidth: SPACING.space_1,
    borderRadius: SPACING.space_10,
    borderColor: COLORS.neutral['700'],
    marginBottom: SPACING.space_24,
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_16,
  },
  title: {
    color: COLORS.neutral['400'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: SPACING.space_14,
  },
  subContainerLegend1: {
    backgroundColor: COLORS.primary['100'],
    height: SPACING.space_10,
    marginRight: SPACING.space_12,
    width: SPACING.space_10,
  },
  subContainerLegend2: {
    backgroundColor: COLORS.primary['50'],
    height: SPACING.space_10,
    marginRight: SPACING.space_12,
    width: SPACING.space_10,
  },
  subContainerTitle: {
    color: COLORS.neutral['100'],
    fontFamily: Typography.secondary.semibold,
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
    marginRight: SPACING.space_20,
  },
});
