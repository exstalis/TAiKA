import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';
import SignUp from '../screens/SignUp';
import CreateStoryTemplate from '../screens/CreateStoryTemplate';
import WriteAboutStory from '../screens/WriteAboutStory';
import StoryDisplay from '../screens/StoryDisplay';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CreateStoryTemplate" component={CreateStoryTemplate} />
      <Stack.Screen name="WriteAboutStory" component={WriteAboutStory} />
      <Stack.Screen name="StoryDisplay" component={StoryDisplay} />
    </Stack.Navigator>
  );
}