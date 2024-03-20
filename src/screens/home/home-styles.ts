import {StyleSheet} from 'react-native';
import {COLORS, Typography, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
  subContainer: {
    backgroundColor: COLORS.white,
    gap: SPACING.space_16,
    margin: SPACING.space_10,
    padding: SPACING.space_20,
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    // fontFamily: Typography.secondary.semiBold,
    fontSize: SPACING.space_16,
  },
  subTitle: {
    color: COLORS.neutral[100],
    // fontFamily: Typography.secondary.regular,
    fontSize: SPACING.space_12,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    // borderColor: COLORS.neutral[10],
  },
  button: {
    padding: SPACING.space_10,
  },
});
