import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './pages/StartPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack' 
import ChoosePage from './pages/ChoosePage';
import ProblemPage from './pages/ProblemPage'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "StartPage" component={ StartPage }/>
        <Stack.Screen name = "ChoosePage" component = {ChoosePage}/>
        <Stack.Screen name = "ProblemPage" component = {ProblemPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
