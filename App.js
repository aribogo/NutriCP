import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepsScreen from './src/screens/StepsScreen';
import AssessmentInstrumentsScreen from './src/screens/AssessmentInstruments';
import * as Font from 'expo-font';
import useFonts from './useFonts';
//import AppLoading from 'expo-app-loading';


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
         <Stack.Screen name="Assessment" component={AssessmentInstrumentsScreen} options={{
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

