import {
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {SPACING, COLORS} from '../../theme';

interface IStyle {
  card: ViewStyle;
  nameContainer: ViewStyle;
  name: TextStyle;
  hp: TextStyle;
  image: ImageStyle;
  typeContainer: ViewStyle;
  badge: ViewStyle;
  typeEmoji: TextStyle;
  typeText: TextStyle;
  movesContainer: ViewStyle;
  movesText: TextStyle;
  weaknessContainer: ViewStyle;
  weaknessText: TextStyle;
}

export const styles: IStyle = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.space_16,
    borderWidth: SPACING.space_2,
    margin: SPACING.space_16,
    padding: SPACING.space_16,
    ...Platform.select({
      android: {
        elevation: SPACING.space_4,
      },
      ios: {
        shadowColor: '#333',
        shadowOffset: {width: SPACING.space_2, height: SPACING.space_2},
        shadowOpacity: 0.3,
        shadowRadius: SPACING.space_4,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.space_32,
    width: '100%',
  },
  name: {
    fontSize: SPACING.space_28,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: SPACING.space_22,
  },
  image: {
    height: SPACING.space_200,
    marginBottom: SPACING.space_16,
    width: '100%',
  },
  typeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SPACING.space_40,
  },
  badge: {
    alignItems: 'center',
    borderRadius: SPACING.space_20,
    borderWidth: SPACING.space_4,
    flexDirection: 'row',
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_8,
  },
  typeEmoji: {
    fontSize: SPACING.space_28,
    marginRight: SPACING.space_12,
  },
  typeText: {
    fontSize: SPACING.space_22,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: SPACING.space_12,
  },
  movesText: {
    fontSize: SPACING.space_22,
    fontWeight: 'bold',
  },
  weaknessContainer: {
    marginBottom: SPACING.space_8,
  },
  weaknessText: {
    fontSize: SPACING.space_22,
    fontWeight: 'bold',
  },
});
