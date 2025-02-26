import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartStoryView() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Start Story View</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WriteAboutStory')}
      >
        <Text style={styles.buttonText}>Go to Write About Story</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
