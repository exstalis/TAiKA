import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoryDisplay = () => {
  return (
    <View style={styles.container}>
      <Text>Story Display Page</Text>
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

export default StoryDisplay;