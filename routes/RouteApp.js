import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen/MainScreen';
import GameScreen from '../screens/GameScreen/GameScreen';

const Stack = createNativeStackNavigator();

export default function RouteApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={MainScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Game"
          component={GameScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
