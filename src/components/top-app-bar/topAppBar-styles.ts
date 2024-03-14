import { StyleSheet } from 'react-native'

import { COLORS } from '../../theme/color'
import { SPACING } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },
  blank: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
  img: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
  txt: {
    color: COLORS.neutral700,
    flex: SPACING.space_1,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    fontWeight: '700',
    marginHorizontal: SPACING.space_16,
    textAlign: 'center',
  },
})
