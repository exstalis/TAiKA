// screens/CreateStoryTemplate.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CreateStoryTemplate = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Story Template</Text>
      <Text style={styles.subtitle}>Design your story template here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'MajorMonoDisplay_400Regular', // Title font
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Nunito_400Regular', // Subtitle font
    fontSize: 18,
    color: '#666',
  },
});

export default CreateStoryTemplate;