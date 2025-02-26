import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WriteAboutStory = () => {
  return (
    <View style={styles.container}>
      <Text>Write About Story Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WriteAboutStory;