import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { StepsScreen } from './src/screens/StepsScreen.js';

const navigator = createStackNavigator(
  {
  Steps: StepsScreen
},
  {
    initialRouteName: 'Steps',
    defaultNavigationOptions: {
      title: 'NutriCP'
    }
  }
);

export default createAppContainer(navigator);

