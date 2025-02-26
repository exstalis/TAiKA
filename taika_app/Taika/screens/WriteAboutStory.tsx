import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WriteAboutStory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Write About Story Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StoryDisplay')}
      >
        <Text style={styles.buttonText}>Go to Story Display</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default WriteAboutStory;