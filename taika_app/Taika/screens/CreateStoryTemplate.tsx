import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function StartStoryView() {
  return (
    <View style={styles.container}>
      <Text>Start Story View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
