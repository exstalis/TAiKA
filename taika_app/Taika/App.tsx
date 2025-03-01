// App.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState, useCallback } from 'react';
import {
  MajorMonoDisplay_400Regular,
  useFonts as useMajorMonoFonts,
} from '@expo-google-fonts/major-mono-display';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  useFonts as useNunitoFonts,
} from '@expo-google-fonts/nunito';
import {
  NotoSans_400Regular,
  useFonts as useNotoSansFonts,
} from '@expo-google-fonts/noto-sans';
import {
  NotoSansDisplay_400Regular,
  useFonts as useNotoSansDisplayFonts,
} from '@expo-google-fonts/noto-sans-display';
import Landing from './screens/Landing';
import SignUp from './screens/SignUp';
import SearchStory from './screens/SearchStory';
import StoryDisplay from './screens/StoryDisplay';
import WriteAboutStory from './screens/WriteAboutStory';
import CreateStoryTemplate from './screens/CreateStoryTemplate';
import StartStoryView from './screens/StartStoryView';
import { RootStackParamList } from './types/navigation';
import { colors } from './constants/colors';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [majorMonoLoaded] = useMajorMonoFonts({
    MajorMonoDisplay_400Regular,
  });
  const [nunitoLoaded] = useNunitoFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
  });
  const [notoSansLoaded] = useNotoSansFonts({
    NotoSans_400Regular,
  });
  const [notoSansDisplayLoaded] = useNotoSansDisplayFonts({
    NotoSansDisplay_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && majorMonoLoaded && nunitoLoaded && notoSansLoaded && notoSansDisplayLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, majorMonoLoaded, nunitoLoaded, notoSansLoaded, notoSansDisplayLoaded]);

  if (!appIsReady || !majorMonoLoaded || !nunitoLoaded || !notoSansLoaded || !notoSansDisplayLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName="StartStoryView"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.suntastic,
          },
          headerTintColor: colors.darknavy,
          headerTitleStyle: {
            fontFamily: 'MajorMonoDisplay_400Regular',
            fontSize: 20,
          },
          headerTitle: 'TAIKA', // Consistent title across screens
          headerBackTitleVisible: false, // Hide back button label
        }}
      >
        <Stack.Screen
          name="StartStoryView"
          component={StartStoryView}
          options={{ headerShown: false }} // No header for StartStoryView
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerLeft: () => null }} // No back button on Landing
        />
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