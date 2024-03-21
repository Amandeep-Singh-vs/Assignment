import React from 'react';
import {Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Fever, Cough, BreathingDifficulty} from '../../assets';
import {styles} from './asOnBoardingCarousel';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootNativeStackParamsList} from '../../types/navigation-types';
import {useNavigation} from '@react-navigation/native';
const ASOnBoardingCarousel = (props: any) => {
  const {setLoginScreen} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>();
  const renderImage = (title: string) => {
    let image;
    switch (title) {
      case 'Fever':
        image = (
          <Fever width={styles.image.width} height={styles.image.height} />
        );
        break;
      case 'Cough':
        image = (
          <Cough width={styles.image.width} height={styles.image.height} />
        );
        break;
      case 'Breathing Difficulty':
        image = (
          <BreathingDifficulty
            width={styles.image.width}
            height={styles.image.height}
          />
        );
        break;
    }
    return image;
  };
  const buttonLabel = (label: string) => {
    return (
      <View>
        <Text>{label}</Text>
      </View>
    );
  };
  const slides = [
    {
      id: 1,
      title: 'Fever',
      description:
        'He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic medical conditions.',
    },
    {
      id: 2,
      title: 'Cough',
      description:
        'Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.',
    },
    {
      id: 3,
      title: 'Breathing Difficulty',
      description:
        'Contact your doctor or clinic right away if you have COVID-19 symptoms, you’ve been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19.',
    },
  ];
  return (
    <View style={styles.container}>
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View>
              <View style={styles.imageContainer}>
                {renderImage(item.title)}
              </View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          );
        }}
        activeDotStyle={styles.dots}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Next')}
        onDone={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default ASOnBoardingCarousel;
