import {View, Text, Image} from 'react-native';

import {getTypeDetails} from '../../utils';
import {IASPokemonCardProps} from '../../types';

import {styles} from './asPokemonCard-styles';

const PokemonCard = ({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: IASPokemonCardProps) => {
  const {borderColor, emoji} = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️HP: {hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, {borderColor}]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weaknesses.join(', ')}
        </Text>
      </View>
    </View>
  );
};

export default PokemonCard;
