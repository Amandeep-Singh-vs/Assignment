import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.neutral['700'],
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    // color:'rgba(23, 23, 37, 1)'
    marginBottom: 4,
  },
});
