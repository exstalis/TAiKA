import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';
import SignUp from '../screens/SignUp';
import CreateStoryTemplate from '../screens/CreateStoryTemplate';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CreateStoryTemplate" component={CreateStoryTemplate} />
    </Stack.Navigator>
  );
}

export default NavigationStack;