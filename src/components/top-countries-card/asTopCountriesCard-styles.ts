import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: SPACING.space_1,
    borderColor: '#E4E4E4',
    borderRadius: SPACING.space_10,
    marginBottom: SPACING.space_8,
    justifyContent: 'space-between',
  },
  progressContainer: {
    marginLeft: SPACING.space_20,
    // marginRight: SPACING.space_12,
  },
  detailContainer: {
    justifyContent: 'flex-end',
  },
  detailContainerTitle: {
    // fontFamily:'Fraunces'
    fontSize: SPACING.space_16,
    lineHeight: SPACING.space_21,
    // color:'background: rgba(21, 21, 34, 1)'
    marginRight: SPACING.space_128,
  },
  detailSubContainer: {},
  detailSubContainerTitle: {
    // fontFamily:'Fraunces'
    fontSize: SPACING.space_12,
    lineHeight: SPACING.space_18,
    // color:'background: rgba(153, 153, 153, 1)'
  },
  containerImage: {
    marginRight: SPACING.space_4,
    marginTop: SPACING.space_4,
  },
});
