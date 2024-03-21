import {StyleSheet, ViewStyle} from 'react-native';

import {SPACING} from './../../theme/spacing';

interface IStyles {
  container: ViewStyle;
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: SPACING.space_1,
  },
});
