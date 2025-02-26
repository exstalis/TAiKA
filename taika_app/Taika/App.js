import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './navigation/NavigationStack';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
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

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
