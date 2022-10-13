import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    interThin: require('./assets/InterDesktop/Inter-Thin.otf'),
  });