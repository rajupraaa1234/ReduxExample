import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodForm from './android/src/foodForm';
import FoodList from './android/src/foodList';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


export default AppStack = () =>

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="FoodForm"
        component={FoodForm}
        options={{
          title: 'Cheetah Coding',
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{
          headerTintColor: 'orange',
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>