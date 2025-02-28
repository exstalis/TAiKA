// screens/StoryDisplay.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type StoryDisplayRouteProp = RouteProp<RootStackParamList, 'StoryDisplay'>;

const StoryDisplay = () => {
  const route = useRoute<StoryDisplayRouteProp>();
  const storyId = route.params?.storyId || 'default';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Story Title (ID: {storyId})</Text>
        <Text style={styles.author}>Author Name</Text>
      </View>
      <ScrollView style={styles.storyContainer}>
        <Text style={styles.storyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.
        </Text>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.image}
        />
        <Text style={styles.storyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    color: '#666',
  },
  storyContainer: {
    width: '100%',
    padding: 20,
  },
  storyText: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    marginBottom: 20,
  },
});

export default StoryDisplay;