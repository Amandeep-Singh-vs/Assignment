import {ImageProps} from 'react-native';

export interface IASPokemonCardProps {
  name: string;
  image: ImageProps;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}
