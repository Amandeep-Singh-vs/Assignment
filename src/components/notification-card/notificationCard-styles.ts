import { StyleSheet } from 'react-native'

import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/color'
import { SPACING } from '../../theme/spacing'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_17,
    borderBottomWidth: 0.7,
    borderColor: COLORS.neutral100,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: SPACING.space_4,
  },
  img: {
    marginRight: SPACING.space_20,
    height: 52.43,
    width: 56.2,
  },
  txt: {
    flex: SPACING.space_1,
    marginRight: SPACING.space_8,
    fontFamily: Typography.primary.medium,
    color: COLORS.black,
    fontSize: SPACING.space_14,
    textAlignVertical: 'center',
  },
  timer: {
    flex: SPACING.space_1,
    paddingHorizontal: SPACING.space_76,
  },
  timertxt: {
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_12,
    color: COLORS.neutral600,
    textAlignVertical: 'center',
  },
  active: {
    backgroundColor: COLORS.primary50,
  },
})
