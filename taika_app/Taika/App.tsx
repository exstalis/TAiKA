// App.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './screens/Landing';
import SignUp from './screens/SignUp';
import SearchStory from './screens/SearchStory';
import StoryDisplay from './screens/StoryDisplay';
import WriteAboutStory from './screens/WriteAboutStory';
import CreateStoryTemplate from './screens/CreateStoryTemplate';
import StartStoryView from './screens/StartStoryView'; // Add back StartStoryView
import { RootStackParamList } from './types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartStoryView" // Change initial route to StartStoryView
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartStoryView" component={StartStoryView} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SearchStory" component={SearchStory} />
        <Stack.Screen name="StoryDisplay" component={StoryDisplay} />
        <Stack.Screen name="WriteAboutStory" component={WriteAboutStory} />
        <Stack.Screen name="CreateStoryTemplate" component={CreateStoryTemplate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;