import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepsScreen from './src/screens/StepsScreen';
import AssessmentInstrumentsScreen from './src/screens/AssessmentInstrumentsScreen';
import PresentationScreen from './src/screens/PresentationScreen';
import NutritionalAssessmentScreen from './src/screens/nutritionalAssessment/NutritionalAssessmentScreen';
import NutriotionalAssessment2Screen from './src/screens/nutritionalAssessment/NutrtionalAssessmetScreen2';
import SymptomManagementScreen from './src/screens/symptomManagement/SymptomManagementScreen';
import SymptomManagementScreen2 from './src/screens/symptomManagement/SymptomManagementScreen2';
import SymptomManagementScreen3 from './src/screens/symptomManagement/SymptomManagementScreen3';
import BioethicalAspectsScreen from './src/screens/bioethicalAspects/BioethicalAspectsScreen';
import BioethicalPrinciplesScreen from './src/screens/bioethicalAspects/BioethicalPrinciplesScreen';
import BioethicalAspectsTopicsScreen from './src/screens/bioethicalAspects/BioethicalAspectsTopicsScreen';
import NutritionalSupportInPalliativeCareScreen from './src/screens/nutritionalSupportInPalliativeCare/NutritionalSupportInPalliativeCare';
import NutritionalMonitoringScreen from './src/screens/nutritionalMonitoring/NutritionalMonitoring';
import DecisionMakingOnArtificalSupportScreen from './src/screens/nutritionalSupportInPalliativeCare/DecisionMakingOnArtificialSupportScreen';
import Reference from './src/screens/references/ReferenceScreen';
import NutritionalSupportIndicationCancerScreen from './src/screens/nutritionalSupportInPalliativeCare/NutritionalSupportIndicationCancerScreen';
import OralNutritionTerapyScreen from './src/screens/nutritionalSupportInPalliativeCare/OralNutritionTerapyScreen';
import OralNTQuestionnaire from './src/screens/nutritionalSupportInPalliativeCare/OralNTQuestionnaire';
import "./i18n.config";
import PpsScreen from './src/screens/pps/PpsScreen';


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
        <Stack.Screen name="symptomManagementInPalliativeCare" component={SymptomManagementScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="SymptomManagementScreen2" component={SymptomManagementScreen2} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="SymptomManagementScreen3" component={SymptomManagementScreen3} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="BioethicalAspects" component={BioethicalAspectsScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="BioethicalPrinciples" component={BioethicalPrinciplesScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="BioethicalAspectsTopicsScreen" component={BioethicalAspectsTopicsScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
         <Stack.Screen name="PalliativeCareInNutricionalSuport" component={NutritionalSupportInPalliativeCareScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
         <Stack.Screen name="NutritionalMonitoring" component={NutritionalMonitoringScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="Pps" component={PpsScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="DMPalliativeCare" component={DecisionMakingOnArtificalSupportScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="Reference" component={Reference} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="NSCancer" component={NutritionalSupportIndicationCancerScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="OralNT" component={OralNutritionTerapyScreen} options={{
          title: 'NutriCP', headerTitleStyle: {
            fontWeight: 'bold',
            color: '#1471AB',
            fontSize: 28,
          }
        }} />
        <Stack.Screen name="OralNTQuestionnaire" component={OralNTQuestionnaire} options={{
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

