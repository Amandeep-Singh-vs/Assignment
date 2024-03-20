import {StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.neutral['700'],
    marginBottom: 25,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  title: {
    lineHeight: 22,
    fontSize: 17,
    // fontFamily:'Fraunces'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
  subContainerLegend1: {
    backgroundColor: COLORS.primary['100'],
    height: SPACING.space_10,
    width: SPACING.space_10,
    marginRight: SPACING.space_12,
  },
  subContainerLegend2: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    backgroundColor: COLORS.primary['50'],
    marginRight: SPACING.space_12,
  },
  subContainerTitle: {
    fontSize: 12,
    lineHeight: 18,
    // color:rgba(153, 153, 153, 1);
    // fontFamily:'Fraunces'
    marginRight: 20,
  },
});
