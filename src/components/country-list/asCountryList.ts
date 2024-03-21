import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {COLORS, SPACING, Typography} from '../../theme';

interface IStyles {
  container: ViewStyle;
  image: ImageStyle;
  countryDataContainer: ViewStyle;
  casesDataContainer: ViewStyle;
  countryName: TextStyle;
  casesData: TextStyle;
  icon: ImageStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderColor: COLORS.neutral['800'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    flex: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_16,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_10,
  },
  image: {
    borderRadius: SPACING.space_8,
    height: SPACING.space_36,
    width: SPACING.space_48,
  },
  countryDataContainer: {
    alignItems: 'center',
    flex: SPACING.space_2,
    flexDirection: 'row',
    gap: SPACING.space_8,
    justifyContent: 'flex-start',
  },
  casesDataContainer: {
    alignItems: 'center',
    flex: SPACING.space_1,
    flexDirection: 'row',
    gap: SPACING.space_4,
    justifyContent: 'flex-end',
    marginLeft: SPACING.space_100,
  },
  countryName: {
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_20,
    lineHeight: SPACING.space_28,
  },
  casesData: {
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
    color: COLORS.neutral['500'],
  },
  icon: {
    padding: SPACING.space_14,
  },
});
