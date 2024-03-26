import {Platform, StyleSheet, ViewStyle} from 'react-native';

import {SPACING} from './spacing';
import {COLORS} from './colors';

interface IStyle {
  container: ViewStyle;
}

export const styles: IStyle = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
    backgroundColor: COLORS.neutral['150'],
    paddingTop: Platform.OS === 'android' ? SPACING.space_24 : SPACING.space_0,
  },
});
