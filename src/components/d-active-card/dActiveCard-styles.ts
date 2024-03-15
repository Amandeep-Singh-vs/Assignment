import { StyleSheet } from 'react-native'

import { COLORS } from '../../theme/color'
import { SPACING } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutralWhite,
    flex: SPACING.space_1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: SPACING.space_20,
  },
  background: {
    borderRadius: SPACING.space_8,
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
  },
  txt: {
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
    fontWeight: '700',
    marginVertical: SPACING.space_8,
    textAlign: 'center',
  },
  btncontainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: COLORS.neutralWhite,
    borderRadius: SPACING.space_8,
    elevation: 3,
    marginVertical: SPACING.space_12,
  },
  btntxt: {
    color: COLORS.neutral700,
    fontFamily: Typography.primary.semiBold,
    fontSize: SPACING.space_12,
    marginHorizontal: SPACING.space_32,
    marginVertical: SPACING.space_14,
  },
})
