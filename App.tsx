import {SafeAreaView, ScrollView} from 'react-native';

import {PokemonCard} from './src/components';
import {POKEMON_DATA} from './src/constants/card-constants';

import {styles} from './src/theme';

const App = () => {
  const renderCards = () => {
    return POKEMON_DATA.map((item, index) => (
      <PokemonCard {...item} key={index} />
    ));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{renderCards()}</ScrollView>
    </SafeAreaView>
  );
};
export default App;
