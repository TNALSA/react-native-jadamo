import { StyleSheet} from 'react-native';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';

import StartPage from './pages/StartPage';
import ChoosePage from './pages/ChoosePage';
import ProblemPage from './pages/ProblemPage'
import AppContext from './Appcontext';

const Stack = createStackNavigator();

export default function App() {
  const [checked, setChecked] = useState(1);

  const setCheckedNumber = (num) => {
    setChecked(num);
  }

  const values = {
    checked: checked,
    setCheckedNumber
  }

  return (
    <AppContext.Provider value={values}>
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "StartPage" component={ StartPage }/>
            <Stack.Screen name = "ChoosePage" component = {ChoosePage}/>
            <Stack.Screen name = "ProblemPage" component = {ProblemPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </AppContext.Provider>
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
