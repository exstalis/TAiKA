import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Cards';

function StoryScreen() {
  return (
    <View style={styles.container}>
      <Text>TAiKA</Text>
      <Card
      style={{ margin: 20 }}
      imageSource={{ uri: 'https://cdn.web.imagine.art/imagine-frontend/assets/images/ai-picture-generator-hero-image.webp' }}
      bodyText="This is TAiKA, a story telling app. It is a platform where you can read and write stories. You can also share your stories with others."
      buttonText="begin"
      onButtonPress={() => alert('Button Pressed')}
       >
      
    </Card>
      <StatusBar style="auto" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Text>Settings Screen</Text>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Story" component={StoryScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
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
