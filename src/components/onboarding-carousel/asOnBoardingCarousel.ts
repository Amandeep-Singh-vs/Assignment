import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // borderWidth: 5,
    // borderColor: 'red',
    paddingTop: 180,
    paddingHorizontal: 25,
  },
  imageContainer: {
    paddingTop: 56,
    // paddingHorizontal: 54,
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 5,
    alignItems: 'center',
    // marginHorizontal: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  dots: {
    backgroundColor: 'red',
    width: 30,
  },
});
