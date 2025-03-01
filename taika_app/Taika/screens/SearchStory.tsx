// screens/SearchStory.tsx
// screens/SearchStory.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SearchStory = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Stories</Text>
      <Text style={styles.subtitle}>Search for bilingual stories here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30, // Flexible margins
    marginVertical: 20,
  },
  title: {
    fontFamily: 'MajorMonoDisplay_400Regular',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center', // Center title horizontally
  },
  subtitle: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    color: '#666',
    textAlign: 'center', // Center subtitle horizontally
  },
});

export default SearchStory;