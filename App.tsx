import 'react-native-gesture-handler';
// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from './src/screens/Screen1';
import { Screen2 } from './src/screens/Screen2';





const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Bienvenido' }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Formulario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
