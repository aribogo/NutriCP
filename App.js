import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import StepsScreen from './src/screens/StepsScreen';
import AssessmentInstrumentsScreen from './src/screens/AssessmentInstruments';
import "./i18n.config";

const Stack = createNativeStackNavigator();

function App() {

  /* const LoadFonts = async () => {
     await useFonts();
   }; 
  if (!IsReady) {
     return (
       <AppLoading
         startAsync={LoadFonts}
         onFinish={() => SetIsReady(true)}
         onError={() => {}}
       />
     );
   } */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Steps" component={StepsScreen} options={{
          title: 'Nutri CP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
         <Stack.Screen name="AssessmentInstruments" component={AssessmentInstrumentsScreen} options={{
          title: 'Nutri CP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

