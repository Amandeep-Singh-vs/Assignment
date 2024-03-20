import {StyleSheet} from 'react-native';
import {COLORS, Typography, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: '40%',
    gap: SPACING.space_28,
  },
  title: {
    fontFamily: Typography.primary.bold,
    fontSize: SPACING.space_28,
    textAlign: 'center',
    color: COLORS.primary['50'],
  },
  copyrightText: {
    marginBottom: '10%',
    fontFamily: Typography.primary.semiBold,
  },
});
