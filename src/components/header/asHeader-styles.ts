import {StyleSheet} from 'react-native';

import {COLORS, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
    backgroundColor: COLORS.white,
  },
  img: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
  txt: {
    // color: COLORS.neutral700,
    flex: SPACING.space_1,
    // fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    marginHorizontal: SPACING.space_16,
    textAlign: 'center',
  },
});
