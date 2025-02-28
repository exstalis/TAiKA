// App.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Landing from './screens/Landing';
import SignUp from './screens/SignUp';
import SearchStory from './screens/SearchStory';
import Try from './screens/Try';
import StoryDisplay from './screens/StoryDisplay';
import GenerateStory from './screens/GenerateStory';
import StartStoryView from './screens/StartStoryView.tsx'; // Added
import WriteAboutStory from './screens/WriteAboutStory'; // Added
import CreateStoryTemplate from './screens/CreateStoryTemplate'; // Added
import { RootStackParamList } from './types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false, // Hide headers by default
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SearchStory" component={SearchStory} />
        <Stack.Screen name="Try" component={Try} />
        <Stack.Screen name="StoryDisplay" component={StoryDisplay} />
        <Stack.Screen name="GenerateStory" component={GenerateStory} />
        <Stack.Screen name="StartStoryView" component={StartStoryView} />
        <Stack.Screen name="WriteAboutStory" component={WriteAboutStory} />
        <Stack.Screen name="CreateStoryTemplate" component={CreateStoryTemplate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;