import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepsScreen from './src/screens/StepsScreen';
import AssessmentInstrumentsScreen from './src/screens/AssessmentInstrumentsScreen';
import PresentationScreen from './src/screens/PresentationScreen';
import NutritionalAssessmentScreen from './src/screens/NutritionalAssessmentScreen';
import NutriotionalAssessment2Screen from './src/screens/NutrtionalAssessmetScreen2';
import "./i18n.config";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Steps" component={StepsScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
         <Stack.Screen name="AssessmentInstruments" component={AssessmentInstrumentsScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
         <Stack.Screen name="Presentation" component={PresentationScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
           <Stack.Screen name="NutritionalAssessment" component={NutritionalAssessmentScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
           <Stack.Screen name="NutritionalAssessment2" component={NutriotionalAssessment2Screen} options={{
          title: 'NutriCP', headerTitleStyle: {
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

