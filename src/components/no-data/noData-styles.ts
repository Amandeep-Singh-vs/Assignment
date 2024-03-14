import { StyleSheet } from 'react-native'

import { COLORS } from '../../theme/color'
import { SPACING } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: SPACING.space_20,
    marginTop: SPACING.space_184,
  },
  image: {
    height: SPACING.space_154,
    marginHorizontal: SPACING.space_90,
    width: SPACING.space_154,
  },
  subcontainer: {
    marginTop: SPACING.space_27,
    width: '100%',
  },
  title: {
    color: COLORS.tundora,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_24,
    fontWeight: '700',
    marginBottom: SPACING.space_8,
    marginHorizontal: SPACING.space_4,
    textAlign: 'center',
  },
  subTitle: {
    color: COLORS.neutral700,
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
