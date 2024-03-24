export enum ResizeMode {
  Cover = 'cover',
  Contain = 'contain',
  Stretch = 'stretch',
  Repeat = 'repeat',
  Center = 'center',
}

export enum HeaderTitle {
  Home = 'Home',
  Map = 'Map',
  Education = 'Education',
  Discovery = 'Discovery',
  News = 'News',
}

export const WEBVIEW_EDUCATION_SCREEN_URI =
  'https://www2.fundsforngos.org/coronavirus-disease-covid-19-advice-for-the-public/';
export const WEBVIEW_NEWS_SCREEN_URI =
  'https://www.firstpost.com/tag/covid-19/';
export const WEBVIEW_DISCOVERY_SCREEN_URI =
  'https://www.google.com/maps/@28.5280669,77.156405,11z?entry=ttu';
export const API_BASE_URL = 'https://disease.sh/v3/covid-19/countries';

export const slides = [
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

export const LIMIT = 300000;
export const PAGE_LIMIT = 5;
export const numberRegexExpression = new RegExp(/^(?:\+)?[7-9][0-9]{9}$/);
export const passwordRegexExpression = /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).+$/;
export const thresholdCases = 50000;
