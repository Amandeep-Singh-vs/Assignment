import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.neutral['50'],
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    flex: SPACING.space_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_16,
    padding: SPACING.space_20,
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_48,
    borderRadius: SPACING.space_8,
  },
  countryDataContainer: {
    alignItems: 'center',
    flex: SPACING.space_2,
    flexDirection: 'row',
    gap: SPACING.space_8,
    justifyContent: 'flex-start',
  },
  covidDataContainer: {
    alignItems: 'center',
    flex: SPACING.space_1,
    flexDirection: 'row',
    gap: SPACING.space_4,
    justifyContent: 'flex-end',
  },
  countryName: {
    // fontFamily: Typography.primary.light,
    fontSize: SPACING.space_20,
    lineHeight: SPACING.space_28,
  },
  covidData: {
    // fontFamily: Typography.secondary.semiBold,
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_20,
  },
  icon: {
    padding: SPACING.space_14,
  },
});
