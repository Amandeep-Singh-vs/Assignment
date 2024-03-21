import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IStyles {
  container: ViewStyle;
  progressContainer: ViewStyle;
  progressContainerText: TextStyle;
  detailContainer: ViewStyle;
  detailContainerTitle: TextStyle;
  detailSubContainerTitle: TextStyle;
  containerImage: ImageStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderColor: COLORS.neutral['800'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_8,
    paddingVertical: SPACING.space_10,
    overflow: 'visible',
  },
  progressContainer: {
    marginLeft: SPACING.space_20,
    marginRight: SPACING.space_10,
    color: COLORS.neutral['600'],
  },
  progressContainerText: {
    color: COLORS.neutral['600'],
    fontSize: SPACING.space_14,
    fontFamily: Typography.secondary.bold,
    lineHeight: SPACING.space_20,
  },
  detailContainer: {
    justifyContent: 'flex-end',
    flex: SPACING.space_1,
  },
  detailContainerTitle: {
    color: COLORS.neutral['500'],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_21,
  },
  detailSubContainerTitle: {
    color: COLORS.neutral['100'],
    fontFamily: Typography.secondary.semibold,
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
  },
  containerImage: {
    marginRight: SPACING.space_4,
    marginTop: SPACING.space_4,
    opacity: SPACING.space_0,
  },
});
