import { StyleSheet } from 'react-native'

import { COLORS } from '../../theme/color'
import { SPACING } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.7,
    borderColor: COLORS.neutral100,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_17,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: SPACING.space_4,
  },
  img: {
    height: SPACING.space_52,
    marginRight: SPACING.space_20,
    width: SPACING.space_56,
  },
  txt: {
    color: COLORS.black,
    flex: SPACING.space_1,
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_14,
    marginRight: SPACING.space_8,
    textAlignVertical: 'center',
  },
  timer: {
    flex: SPACING.space_1,
    paddingHorizontal: SPACING.space_76,
  },
  timertxt: {
    color: COLORS.neutral600,
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_12,
    textAlignVertical: 'center',
  },
  active: {
    backgroundColor: COLORS.primary50,
  },
})
