import { StyleSheet } from 'react-native'

import { COLORS } from './color'
import { SPACING } from './spacing'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.neutralWhite,
    flex: SPACING.space_1,
    flexDirection: 'column',
  },
})
